import { deleteObject, getDownloadURL, getStorage, listAll, ListResult, ref, StorageReference, uploadBytesResumable, getMetadata } from "firebase/storage"
import { Utils } from "./Utils";

export class FileHandler
{
    static async RestrictImageSize (file:any, pixelMaxSize:number, onDone:(resizedImage:any)=> any = null as any) : Promise<void>
    {
        // Ensure it's an image
        if(!file.type.match(/image.*/)) {
            console.log('An image has been loaded');
            onDone?.(null);
            return;
        }
      
        const reader = new FileReader();
        const image = new Image();
        const canvas = document.createElement('canvas');
        const dataURItoBlob = (dataURI: string) => {
            const bytes = dataURI.split(',')[0].indexOf('base64') >= 0 ?
                atob(dataURI.split(',')[1]) :
                unescape(dataURI.split(',')[1]);
            const mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
            const max = bytes.length;
            const ia = new Uint8Array(max);
            for (var i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i);
            return new Blob([ia], {type:mime});
        };
        const resize = () => {
            
            let width = image.width;
            let height = image.height;
        
            if (pixelMaxSize !== - 1) {
                if (width > height) {
                    if (width > pixelMaxSize) {
                        height *= pixelMaxSize / width;
                        width = pixelMaxSize;
                    }
                } else {
                    if (height > pixelMaxSize) {
                        width *= pixelMaxSize / height;
                        height = pixelMaxSize;
                    }
                }
            }
            canvas.width = width;
            canvas.height = height;
            let context = canvas.getContext('2d');
            if (context)
            context.drawImage(image, 0, 0, width, height);
            let dataUrl = canvas.toDataURL('image/jpeg');
            return dataURItoBlob(dataUrl);
        };
            
            reader.onload = (readerEvent: any) => {
                image.onload = () => onDone(resize());
                image.src = readerEvent.target.result;
            };
            reader.readAsDataURL(file);
    };
    
    static async UploadImage(image:any, filePath:string, onSuccess: (downloadUrl:string) => any = null as any, onFail: (error:string, message:string) => any = null as any) : Promise<void>
    {
        // Ensure it's an image
        if(!image.type.match(/image.*/)) {
            console.log('An image has been loaded');
            onFail?.("not_image", "Not an image.");
            return;
        }

        // Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType: 'image/jpeg'
        };

        //console.log("Try Upload File");
        this.UploadFile(image, filePath, 
            (downloadUrl)=>{
                onSuccess(downloadUrl);
            },
            (error, message)=>{
                onFail(error, message);
            },
            metadata);
    }

    static async GetImageMetaData(photoUrl: string): Promise<any>
    {
        const storage = getStorage();

        let url = Utils.GetFirestoreImageRef(photoUrl);
        const imageRef = ref(storage, url);

        let imgMetadata = null as any;
        await getMetadata(imageRef).then((metadata) => {
            imgMetadata = metadata;
        })

        return Promise.resolve(imgMetadata);
    }

    static UploadFile(fileData:any, filePath:string, 
        onSuccess: (downloadUrl:string) => any = null as any, 
        onFail: (error:string, message:string) => any = null as any,
        metaData:any = null as any)
    {
        const storage = getStorage();

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, filePath);
        const uploadTask = uploadBytesResumable(storageRef, fileData, metaData);

        // Listen for state changes, errors, and completion of the upload.
        //console.log("Upload Task Start");
        uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //console.log('QQQ Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                //console.log('Upload is paused');
                break;
            case 'running':
                //console.log('Upload is running');
                break;
            }
        }, 
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
            case 'storage/canceled':
                // User canceled the upload
                break;

            // ...

            case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
            console.log(`Error Code: ${error.code} | Message: ${error.message}`);
            onFail?.(error.code, error.message);
        }, 
        () => {
            // Upload completed successfully, now we can get the download URL
            //console.log("Upload Complete!");
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                onSuccess?.(downloadURL);
            });
        }
        );
    }

    static DeleteFile(filePath:string, 
        onSuccess: () => any = null as any, 
        onFail: (error:string, message:string) => any = null as any)
    {
        const storage = getStorage();

        // Create a reference to the file to delete
        const desertRef = ref(storage, filePath);

        // Delete the file
        deleteObject(desertRef).then(() => {
            // File deleted successfully
            onSuccess?.();
        }).catch((error) => {
            // Uh-oh, an error occurred!
            onFail?.(error.code, error.message);
        });
    }

    static async ListAllFiles(folderPath:string):Promise<string[]>
    {
        const storage = getStorage();
        const listRef = ref(storage, folderPath);
        let itemList:string[] = [];
        
        let itemStorages:StorageReference[] = [];
        // Find all the prefixes and items.
        await listAll(listRef).then((res) => {
            //res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
            //});
            itemStorages = res.items;
        }).catch((error) => {
            // Uh-oh, an error occurred!
            return Promise.reject(error);
        });
        for (let i = 0; i < itemStorages.length; i++)
        {
            await getDownloadURL(itemStorages[i]).then((downloadURL) => {
                console.log('File available at', downloadURL);
                itemList.push(downloadURL);
            });
        }
        return Promise.resolve(itemList);
    }

    public static ReadImageFile(file: any, onLoad: (file: any) => void)
    {
        return new Promise((resolve, reject) => {
            let fr = new FileReader();

            fr.onload = () => {
                onLoad(file);
                resolve(fr.result);
            }

            fr.onerror = () => {
                reject(fr);
            }

            fr.readAsDataURL(file);
        })
    }
}