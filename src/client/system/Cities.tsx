type Props = {
    country: string
}

const Cities: React.FC<Props> = ({country = ""}) => {
    const setCities = () => {
        switch (country)
        {
            case "Afghanistan":
                return (
                    <>
                        <option value="Badakhshan">Badakhshan</option>
                        <option value="Badghīs">Badghīs</option>
                        <option value="Baghlan">Baghlan</option>
                        <option value="Balkh">Balkh</option>
                        <option value="Bamyān">Bamyān</option>
                        <option value="Daykundī">Daykundī</option>
                        <option value="Farah">Farah</option>
                        <option value="Faryāb">Faryāb</option>
                        <option value="Ghaznī">Ghaznī</option>
                        <option value="Ghōr">Ghōr</option>
                        <option value="Helmand">Helmand</option>
                        <option value="Herat">Herat</option>
                        <option value="Jowzjan">Jowzjan</option>
                        <option value="Kabul">Kabul</option>
                        <option value="Kandahar">Kandahar</option>
                        <option value="Kapīsā">Kapīsā</option>
                        <option value="Khōst">Khōst</option>
                        <option value="Kunaṟ">Kunaṟ</option>
                        <option value="Kunduz">Kunduz</option>
                        <option value="Laghman">Laghman</option>
                        <option value="Lōgar">Lōgar</option>
                        <option value="Nangarhar">Nangarhar</option>
                        <option value="Nīmrōz">Nīmrōz</option>
                        <option value="Nūristan">Nūristan</option>
                        <option value="Paktiya">Paktiya</option>
                        <option value="Paktīka">Paktīka</option>
                        <option value="Panjshayr">Panjshayr</option>
                        <option value="Parwan">Parwan</option>
                        <option value="Samangan">Samangan</option>
                        <option value="Sar-e Pul">Sar-e Pul</option>
                        <option value="Takhar">Takhar</option>
                        <option value="Uruzgan">Uruzgan</option>
                        <option value="Wardak">Wardak</option>
                        <option value="Zabul">Zabul</option>
                    </>
                )
            case "Albania":
                return (
                    <>
                        <option value="Berat">Berat</option>
                        <option value="Dibër">Dibër</option>
                        <option value="Durrës">Durrës</option>
                        <option value="Elbasan">Elbasan</option>
                        <option value="Fier">Fier</option>
                        <option value="Gjirokastër">Gjirokastër</option>
                        <option value="Korçë">Korçë</option>
                        <option value="Kukës">Kukës</option>
                        <option value="Lezhë">Lezhë</option>
                        <option value="Shkodër">Shkodër</option>
                        <option value="Tiranë">Tiranë</option>
                        <option value="Vlorë">Vlorë</option>
                    </>
                )
            case "Algeria":
                return (
                    <>
                        <option value="Adrar">Adrar</option>
                        <option value="Alger">Alger</option>
                        <option value="Annaba">Annaba</option>
                        <option value="Aïn Defla">Aïn Defla</option>
                        <option value="Aïn Témouchent">Aïn Témouchent</option>
                        <option value="Batna">Batna</option>
                        <option value="Biskra">Biskra</option>
                        <option value="Blida">Blida</option>
                        <option value="Bordj Bou Arréridj">Bordj Bou Arréridj</option>
                        <option value="Bouira">Bouira</option>
                        <option value="Boumerdès">Boumerdès</option>
                        <option value="Béchar">Béchar</option>
                        <option value="Béjaïa">Béjaïa</option>
                        <option value="Chlef">Chlef</option>
                        <option value="Constantine">Constantine</option>
                        <option value="Djelfa">Djelfa</option>
                        <option value="El Bayadh">El Bayadh</option>
                        <option value="El Oued">El Oued</option>
                        <option value="El Tarf">El Tarf</option>
                        <option value="Ghardaïa">Ghardaïa</option>
                        <option value="Guelma">Guelma</option>
                        <option value="Illizi">Illizi</option>
                        <option value="Jijel">Jijel</option>
                        <option value="Khenchela">Khenchela</option>
                        <option value="Laghouat">Laghouat</option>
                        <option value="M'sila">M'sila</option>
                        <option value="Mascara">Mascara</option>
                        <option value="Mila">Mila</option>
                        <option value="Mostaganem">Mostaganem</option>
                        <option value="Médéa">Médéa</option>
                        <option value="Naama">Naama</option>
                        <option value="Oran">Oran</option>
                        <option value="Ouargla">Ouargla</option>
                        <option value="Oum el Bouaghi">Oum el Bouaghi</option>
                        <option value="Relizane">Relizane</option>
                        <option value="Saïda">Saïda</option>
                        <option value="Sidi Bel Abbès">Sidi Bel Abbès</option>
                        <option value="Skikda">Skikda</option>
                        <option value="Souk Ahras">Souk Ahras</option>
                        <option value="Sétif">Sétif</option>
                        <option value="Tamanrasset">Tamanrasset</option>
                        <option value="Tiaret">Tiaret</option>
                        <option value="Tindouf">Tindouf</option>
                        <option value="Tipaza">Tipaza</option>
                        <option value="Tissemsilt">Tissemsilt</option>
                        <option value="Tizi Ouzou">Tizi Ouzou</option>
                        <option value="Tlemcen">Tlemcen</option>
                        <option value="Tébessa">Tébessa</option>
                    </>
                )
            case "Andorra":
                return (
                    <>
                        <option value="Andorra la Vella">Andorra la Vella</option>
                        <option value="Canillo">Canillo</option>
                        <option value="Encamp">Encamp</option>
                        <option value="Escaldes-Engordany">Escaldes-Engordany</option>
                        <option value="La Massana">La Massana</option>
                        <option value="Ordino">Ordino</option>
                        <option value="Sant Julià de Lòria">Sant Julià de Lòria</option>
                    </>
                )
            case "Angola":
                return (
                    <>
                        <option value="Bengo">Bengo</option>
                        <option value="Benguela">Benguela</option>
                        <option value="Bié">Bié</option>
                        <option value="Cabinda">Cabinda</option>
                        <option value="Cuando Cubango">Cuando Cubango</option>
                        <option value="Cuanza-Norte">Cuanza-Norte</option>
                        <option value="Cuanza-Sul">Cuanza-Sul</option>
                        <option value="Cunene">Cunene</option>
                        <option value="Huambo">Huambo</option>
                        <option value="Huíla">Huíla</option>
                        <option value="Luanda">Luanda</option>
                        <option value="Lunda-Norte">Lunda-Norte</option>
                        <option value="Lunda-Sul">Lunda-Sul</option>
                        <option value="Malange">Malange</option>
                        <option value="Moxico">Moxico</option>
                        <option value="Namibe">Namibe</option>
                        <option value="Uíge">Uíge</option>
                        <option value="Zaire">Zaire</option>
                    </>
                )
            case "Anguilla":
                return (
                    <>
                        <option value="Anguilla">Anguilla</option>
                    </>
                )
            case "Antigua & Barbuda":
                return (
                    <>
                        <option value="Barbuda">Barbuda</option>
                        <option value="Redonda">Redonda</option>
                        <option value="Saint George">Saint George</option>
                        <option value="Saint John">Saint John</option>
                        <option value="Saint Mary">Saint Mary</option>
                        <option value="Saint Paul">Saint Paul</option>
                        <option value="Saint Peter">Saint Peter</option>
                        <option value="Saint Philip">Saint Philip</option>
                    </>
                )
            case "Argentina":
                return (
                    <>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Ciudad Autónoma de Buenos Aires">Ciudad Autónoma de Buenos Aires</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Entre Ríos">Entre Ríos</option>
                        <option value="Formosa">Formosa</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="La Pampa">La Pampa</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Misiones">Misiones</option>
                        <option value="Neuquén">Neuquén</option>
                        <option value="Río Negro">Río Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Luis">San Luis</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Santiago del Estero">Santiago del Estero</option>
                        <option value="Tierra del Fuego">Tierra del Fuego</option>
                        <option value="Tucumán">Tucumán</option>
                    </>
                )
            case "Armenia":
                return (
                    <>
                        <option value="Aragac̣otn">Aragac̣otn</option>
                        <option value="Ararat">Ararat</option>
                        <option value="Armavir">Armavir</option>
                        <option value="Erevan">Erevan</option>
                        <option value="Geġark'unik'">Geġark'unik'</option>
                        <option value="Kotayk'">Kotayk'</option>
                        <option value="Loṙi">Loṙi</option>
                        <option value="Syunik'">Syunik'</option>
                        <option value="Tavuš">Tavuš</option>
                        <option value="Vayoć Jor">Vayoć Jor</option>
                        <option value="Širak">Širak</option>
                    </>
                )
            case "Aruba":
                return (
                    <>
                        <option value="Aruba">Aruba</option>
                    </>
                )
            case "Australia":
                return (
                    <>
                        <option value="Australian Capital Territory">Australian Capital Territory</option>
                        <option value="New South Wales">New South Wales</option>
                        <option value="Northern Territory">Northern Territory</option>
                        <option value="Queensland">Queensland</option>
                        <option value="South Australia">South Australia</option>
                        <option value="Tasmania">Tasmania</option>
                        <option value="Victoria">Victoria</option>
                        <option value="Western Australia">Western Australia</option>
                    </>
                )
            case "Austria":
                return (
                    <>
                        <option value="Burgenland">Burgenland</option>
                        <option value="Carinthia">Carinthia</option>
                        <option value="Lower Austria">Lower Austria</option>
                        <option value="Salzburg">Salzburg</option>
                        <option value="Styria">Styria</option>
                        <option value="Tyrol">Tyrol</option>
                        <option value="Upper Austria">Upper Austria</option>
                        <option value="Vienna">Vienna</option>
                        <option value="Vorarlberg">Vorarlberg</option>
                    </>
                )
            case "Azerbaijan":
                return (
                    <>
                        <option value="Absheron District">Absheron District</option>
                        <option value="Agdam District">Agdam District</option>
                        <option value="Agdash District">Agdash District</option>
                        <option value="Aghjabadi District">Aghjabadi District</option>
                        <option value="Agstafa District">Agstafa District</option>
                        <option value="Agsu District">Agsu District</option>
                        <option value="Astara District">Astara District</option>
                        <option value="Babek District">Babek District</option>
                        <option value="Baku">Baku</option>
                        <option value="Balakan District">Balakan District</option>
                        <option value="Barda District">Barda District</option>
                        <option value="Beylagan District">Beylagan District</option>
                        <option value="Bilasuvar District">Bilasuvar District</option>
                        <option value="Dashkasan District">Dashkasan District</option>
                        <option value="Fizuli District">Fizuli District</option>
                        <option value="Ganja">Ganja</option>
                        <option value="Gədəbəy">Gədəbəy</option>
                        <option value="Gobustan District">Gobustan District</option>
                        <option value="Goranboy District">Goranboy District</option>
                        <option value="Goychay">Goychay</option>
                        <option value="Goygol District">Goygol District</option>
                        <option value="Hajigabul District">Hajigabul District</option>
                        <option value="Imishli District">Imishli District</option>
                        <option value="Ismailli District">Ismailli District</option>
                        <option value="Jabrayil District">Jabrayil District</option>
                        <option value="Jalilabad District">Jalilabad District</option>
                        <option value="Julfa District">Julfa District</option>
                        <option value="Kalbajar District">Kalbajar District</option>
                        <option value="Kangarli District">Kangarli District</option>
                        <option value="Khachmaz District">Khachmaz District</option>
                        <option value="Khizi District">Khizi District</option>
                        <option value="Khojali District">Khojali District</option>
                        <option value="Kurdamir District">Kurdamir District</option>
                        <option value="Lachin District">Lachin District</option>
                        <option value="Lankaran">Lankaran</option>
                        <option value="Lankaran District">Lankaran District</option>
                        <option value="Lerik District">Lerik District</option>
                        <option value="Martuni">Martuni</option>
                        <option value="Masally District">Masally District</option>
                        <option value="Mingachevir">Mingachevir</option>
                        <option value="Nakhchivan Autonomous Republic">Nakhchivan Autonomous Republic</option>
                        <option value="Neftchala District">Neftchala District</option>
                        <option value="Oghuz District">Oghuz District</option>
                        <option value="Ordubad District">Ordubad District</option>
                        <option value="Qabala District">Qabala District</option>
                        <option value="Qakh District">Qakh District</option>
                        <option value="Qazakh District">Qazakh District</option>
                        <option value="Quba District">Quba District</option>
                        <option value="Qubadli District">Qubadli District</option>
                        <option value="Qusar District">Qusar District</option>
                        <option value="Saatly District">Saatly District</option>
                        <option value="Sabirabad District">Sabirabad District</option>
                        <option value="Sadarak District">Sadarak District</option>
                        <option value="Salyan District">Salyan District</option>
                        <option value="Samukh District">Samukh District</option>
                        <option value="Shabran District">Shabran District</option>
                        <option value="Shahbuz District">Shahbuz District</option>
                        <option value="Shaki">Shaki</option>
                        <option value="Shaki District">Shaki District</option>
                        <option value="Shamakhi District">Shamakhi District</option>
                        <option value="Shamkir District">Shamkir District</option>
                        <option value="Sharur District">Sharur District</option>
                        <option value="Shirvan">Shirvan</option>
                        <option value="Shusha District">Shusha District</option>
                        <option value="Siazan District">Siazan District</option>
                        <option value="Sumqayit">Sumqayit</option>
                        <option value="Tartar District">Tartar District</option>
                        <option value="Tovuz District">Tovuz District</option>
                        <option value="Ujar District">Ujar District</option>
                        <option value="Yardymli District">Yardymli District</option>
                        <option value="Yevlakh">Yevlakh</option>
                        <option value="Yevlakh District">Yevlakh District</option>
                        <option value="Zangilan District">Zangilan District</option>
                        <option value="Zaqatala District">Zaqatala District</option>
                        <option value="Zardab District">Zardab District</option>
                    </>
                )
            case "Bahamas":
                return (
                    <>
                        <option value="Acklins">Acklins</option>
                        <option value="Acklins and Crooked Islands">Acklins and Crooked Islands</option>
                        <option value="Berry Islands">Berry Islands</option>
                        <option value="Bimini">Bimini</option>
                        <option value="Black Point">Black Point</option>
                        <option value="Cat Island">Cat Island</option>
                        <option value="Central Abaco">Central Abaco</option>
                        <option value="Central Andros">Central Andros</option>
                        <option value="Central Eleuthera">Central Eleuthera</option>
                        <option value="Crooked Island">Crooked Island</option>
                        <option value="East Grand Bahama">East Grand Bahama</option>
                        <option value="Exuma">Exuma</option>
                        <option value="Freeport">Freeport</option>
                        <option value="Fresh Creek">Fresh Creek</option>
                        <option value="Governor's Harbour">Governor's Harbour</option>
                        <option value="Grand Cay">Grand Cay</option>
                        <option value="Green Turtle Cay">Green Turtle Cay</option>
                        <option value="Harbour Island">Harbour Island</option>
                        <option value="High Rock">High Rock</option>
                        <option value="Hope Town">Hope Town</option>
                        <option value="Inagua">Inagua</option>
                        <option value="Kemps Bay">Kemps Bay</option>
                        <option value="Long Island">Long Island</option>
                        <option value="Mangrove Cay">Mangrove Cay</option>
                        <option value="Marsh Harbour">Marsh Harbour</option>
                        <option value="Mayaguana District">Mayaguana District</option>
                        <option value="New Providence">New Providence</option>
                        <option value="Nichollstown and Berry Islands">Nichollstown and Berry Islands</option>
                        <option value="North Abaco">North Abaco</option>
                        <option value="North Andros">North Andros</option>
                        <option value="North Eleuthera">North Eleuthera</option>
                        <option value="Ragged Island">Ragged Island</option>
                        <option value="Rock Sound">Rock Sound</option>
                        <option value="Rum Cay District">Rum Cay District</option>
                        <option value="San Salvador and Rum Cay">San Salvador and Rum Cay</option>
                        <option value="San Salvador Island">San Salvador Island</option>
                        <option value="Sandy Point">Sandy Point</option>
                        <option value="South Abaco">South Abaco</option>
                        <option value="South Andros">South Andros</option>
                        <option value="South Eleuthera">South Eleuthera</option>
                        <option value="Spanish Wells">Spanish Wells</option>
                        <option value="West Grand Bahama">West Grand Bahama</option>
                    </>
                )
            case "Bahrain":
                return (
                    <>
                        <option value="Capital Governorate">Capital Governorate</option>
                        <option value="Central Governorate">Central Governorate</option>
                        <option value="Muharraq Governorate">Muharraq Governorate</option>
                        <option value="Northern Governorate">Northern Governorate</option>
                        <option value="Southern Governorate">Southern Governorate</option>
                    </>
                )
            case "Bangladesh":
                return (
                    <>
                        <option value="Bagerhat District">Bagerhat District</option>
                        <option value="Bahadia">Bahadia</option>
                        <option value="Bandarban District">Bandarban District</option>
                        <option value="Barguna District">Barguna District</option>
                        <option value="Barisal District">Barisal District</option>
                        <option value="Barisal Division">Barisal Division</option>
                        <option value="Bhola District">Bhola District</option>
                        <option value="Bogra District">Bogra District</option>
                        <option value="Brahmanbaria District">Brahmanbaria District</option>
                        <option value="Chandpur District">Chandpur District</option>
                        <option value="Chapai Nawabganj District">Chapai Nawabganj District</option>
                        <option value="Chittagong District">Chittagong District</option>
                        <option value="Chittagong Division">Chittagong Division</option>
                        <option value="Chuadanga District">Chuadanga District</option>
                        <option value="Comilla District">Comilla District</option>
                        <option value="Cox's Bazar District">Cox's Bazar District</option>
                        <option value="Dhaka District">Dhaka District</option>
                        <option value="Dhaka Division">Dhaka Division</option>
                        <option value="Dinajpur District">Dinajpur District</option>
                        <option value="Faridpur District">Faridpur District</option>
                        <option value="Feni District">Feni District</option>
                        <option value="Gaibandha District">Gaibandha District</option>
                        <option value="Gazipur District">Gazipur District</option>
                        <option value="Gopalganj District">Gopalganj District</option>
                        <option value="Habiganj District">Habiganj District</option>
                        <option value="Jamalpur District">Jamalpur District</option>
                        <option value="Jessore District">Jessore District</option>
                        <option value="Jhalokati District">Jhalokati District</option>
                        <option value="Jhenaidah District">Jhenaidah District</option>
                        <option value="Joypurhat District">Joypurhat District</option>
                        <option value="Khagrachari District">Khagrachari District</option>
                        <option value="Khulna District">Khulna District</option>
                        <option value="Khulna Division">Khulna Division</option>
                        <option value="Kishoreganj District">Kishoreganj District</option>
                        <option value="Kurigram District">Kurigram District</option>
                        <option value="Kushtia District">Kushtia District</option>
                        <option value="Lakshmipur District">Lakshmipur District</option>
                        <option value="Lalmonirhat District">Lalmonirhat District</option>
                        <option value="Madaripur District">Madaripur District</option>
                        <option value="Meherpur District">Meherpur District</option>
                        <option value="Moulvibazar District">Moulvibazar District</option>
                        <option value="Munshiganj District">Munshiganj District</option>
                        <option value="Mymensingh District">Mymensingh District</option>
                        <option value="Mymensingh Division">Mymensingh Division</option>
                        <option value="Naogaon District">Naogaon District</option>
                        <option value="Narail District">Narail District</option>
                        <option value="Narayanganj District">Narayanganj District</option>
                        <option value="Natore District">Natore District</option>
                        <option value="Netrokona District">Netrokona District</option>
                        <option value="Nilphamari District">Nilphamari District</option>
                        <option value="Noakhali District">Noakhali District</option>
                        <option value="Pabna District">Pabna District</option>
                        <option value="Panchagarh District">Panchagarh District</option>
                        <option value="Patuakhali District">Patuakhali District</option>
                        <option value="Pirojpur District">Pirojpur District</option>
                        <option value="Rajbari District">Rajbari District</option>
                        <option value="Rajshahi District">Rajshahi District</option>
                        <option value="Rajshahi Division">Rajshahi Division</option>
                        <option value="Rangamati Hill District">Rangamati Hill District</option>
                        <option value="Rangpur District">Rangpur District</option>
                        <option value="Rangpur Division">Rangpur Division</option>
                        <option value="Satkhira District">Satkhira District</option>
                        <option value="Shariatpur District">Shariatpur District</option>
                        <option value="Sherpur District">Sherpur District</option>
                        <option value="Sirajganj District">Sirajganj District</option>
                        <option value="Sunamganj District">Sunamganj District</option>
                        <option value="Sylhet District">Sylhet District</option>
                        <option value="Sylhet Division">Sylhet Division</option>
                        <option value="Tangail District">Tangail District</option>
                        <option value="Thakurgaon District">Thakurgaon District</option>
                    </>
                )
            case "Barbados":
                return (
                    <>
                        <option value="Christ Church">Christ Church</option>
                        <option value="Saint Andrew">Saint Andrew</option>
                        <option value="Saint George">Saint George</option>
                        <option value="Saint James">Saint James</option>
                        <option value="Saint John">Saint John</option>
                        <option value="Saint Joseph">Saint Joseph</option>
                        <option value="Saint Lucy">Saint Lucy</option>
                        <option value="Saint Michael">Saint Michael</option>
                        <option value="Saint Peter">Saint Peter</option>
                        <option value="Saint Philip">Saint Philip</option>
                        <option value="Saint Thomas">Saint Thomas</option>
                    </>
                )
            case "Belarus":
                return (
                    <>
                        <option value="Brest Region">Brest Region</option>
                        <option value="Gomel Region">Gomel Region</option>
                        <option value="Grodno Region">Grodno Region</option>
                        <option value="Minsk">Minsk</option>
                        <option value="Minsk Region">Minsk Region</option>
                        <option value="Mogilev Region">Mogilev Region</option>
                        <option value="Vitebsk Region">Vitebsk Region</option>
                    </>
                )
            case "Belgium":
                return (
                    <>
                        <option value="Antwerp">Antwerp</option>
                        <option value="Brussels-Capital Region">Brussels-Capital Region</option>
                        <option value="East Flanders">East Flanders</option>
                        <option value="Flanders">Flanders</option>
                        <option value="Flemish Brabant">Flemish Brabant</option>
                        <option value="Hainaut">Hainaut</option>
                        <option value="Liège">Liège</option>
                        <option value="Limburg">Limburg</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Namur">Namur</option>
                        <option value="Wallonia">Wallonia</option>
                        <option value="Walloon Brabant">Walloon Brabant</option>
                        <option value="West Flanders">West Flanders</option>
                    </>
                )
            case "Belize":
                return (
                    <>
                        <option value="Belize District">Belize District</option>
                        <option value="Cayo District">Cayo District</option>
                        <option value="Corozal District">Corozal District</option>
                        <option value="Orange Walk District">Orange Walk District</option>
                        <option value="Stann Creek District">Stann Creek District</option>
                        <option value="Toledo District">Toledo District</option>
                    </>
                )
            case "Benin":
                return (
                    <>
                        <option value="Alibori Department">Alibori Department</option>
                        <option value="Atakora Department">Atakora Department</option>
                        <option value="Atlantique Department">Atlantique Department</option>
                        <option value="Borgou Department">Borgou Department</option>
                        <option value="Collines Department">Collines Department</option>
                        <option value="Donga Department">Donga Department</option>
                        <option value="Kouffo Department">Kouffo Department</option>
                        <option value="Littoral Department">Littoral Department</option>
                        <option value="Mono Department">Mono Department</option>
                        <option value="Ouémé Department">Ouémé Department</option>
                        <option value="Plateau Department">Plateau Department</option>
                        <option value="Zou Department">Zou Department</option>
                    </>
                )
            case "Bermuda":
                return (
                    <>
                        <option value="Devonshire Parish">Devonshire Parish</option>
                        <option value="Hamilton Municipality">Hamilton Municipality</option>
                        <option value="Hamilton Parish">Hamilton Parish</option>
                        <option value="Paget Parish">Paget Parish</option>
                        <option value="Pembroke Parish">Pembroke Parish</option>
                        <option value="Saint George's Municipality">Saint George's Municipality</option>
                        <option value="Saint George's Parish">Saint George's Parish</option>
                        <option value="Sandys Parish">Sandys Parish</option>
                        <option value="Smith's Parish,">Smith's Parish,</option>
                        <option value="Southampton Parish">Southampton Parish</option>
                        <option value="Warwick Parish">Warwick Parish</option>
                    </>
                )
            case "Bhutan":
                return (
                    <>
                        <option value="Bumthang District">Bumthang District</option>
                        <option value="Chukha District">Chukha District</option>
                        <option value="Dagana District">Dagana District</option>
                        <option value="Gasa District">Gasa District</option>
                        <option value="Haa District">Haa District</option>
                        <option value="Lhuntse District">Lhuntse District</option>
                        <option value="Mongar District">Mongar District</option>
                        <option value="Paro District">Paro District</option>
                        <option value="Pemagatshel District">Pemagatshel District</option>
                        <option value="Punakha District">Punakha District</option>
                        <option value="Samdrup Jongkhar District">Samdrup Jongkhar District</option>
                        <option value="Samtse District">Samtse District</option>
                        <option value="Sarpang District">Sarpang District</option>
                        <option value="Thimphu District">Thimphu District</option>
                        <option value="Trashigang District">Trashigang District</option>
                        <option value="Trongsa District">Trongsa District</option>
                        <option value="Tsirang District">Tsirang District</option>
                        <option value="Wangdue Phodrang District">Wangdue Phodrang District</option>
                        <option value="Zhemgang District">Zhemgang District</option>
                    </>
                )
            case "Bolivia":
                return (
                    <>
                        <option value="Beni Department">Beni Department</option>
                        <option value="Chuquisaca Department">Chuquisaca Department</option>
                        <option value="Cochabamba Department">Cochabamba Department</option>
                        <option value="La Paz Department">La Paz Department</option>
                        <option value="Oruro Department">Oruro Department</option>
                        <option value="Pando Department">Pando Department</option>
                        <option value="Potosí Department">Potosí Department</option>
                        <option value="Santa Cruz Department">Santa Cruz Department</option>
                        <option value="Tarija Department">Tarija Department</option>
                    </>
                )
            case "Bonaire":
                return (
                    <>
                        <option value="Bonaire">Bonaire</option>
                    </>
                )
            case "Bosnia & Herzegovina":
                return (
                    <>
                        <option value="Bosnian Podrinje Canton">Bosnian Podrinje Canton</option>
                        <option value="Brčko District">Brčko District</option>
                        <option value="Canton 10">Canton 10</option>
                        <option value="Central Bosnia Canton">Central Bosnia Canton</option>
                        <option value="Federation of Bosnia and Herzegovina">Federation of Bosnia and Herzegovina</option>
                        <option value="Herzegovina-Neretva Canton">Herzegovina-Neretva Canton</option>
                        <option value="Posavina Canton">Posavina Canton</option>
                        <option value="Republika Srpska">Republika Srpska</option>
                        <option value="Sarajevo Canton">Sarajevo Canton</option>
                        <option value="Tuzla Canton">Tuzla Canton</option>
                        <option value="Una-Sana Canton">Una-Sana Canton</option>
                        <option value="West Herzegovina Canton">West Herzegovina Canton</option>
                        <option value="Zenica-Doboj Canton">Zenica-Doboj Canton</option>
                    </>
                )
            case "Botswana":
                return (
                    <>
                        <option value="Central District">Central District</option>
                        <option value="Ghanzi District">Ghanzi District</option>
                        <option value="Kgalagadi District">Kgalagadi District</option>
                        <option value="Kgatleng District">Kgatleng District</option>
                        <option value="Kweneng District">Kweneng District</option>
                        <option value="Ngamiland">Ngamiland</option>
                        <option value="North-East District">North-East District</option>
                        <option value="North-West District">North-West District</option>
                        <option value="South-East District">South-East District</option>
                        <option value="Southern District">Southern District</option>
                    </>
                )
            case "Brazil":
                return (
                    <>
                        <option value="Acre">Acre</option>
                        <option value="Alagoas">Alagoas</option>
                        <option value="Amapá">Amapá</option>
                        <option value="Amazonas">Amazonas</option>
                        <option value="Bahia">Bahia</option>
                        <option value="Ceará">Ceará</option>
                        <option value="Espírito Santo">Espírito Santo</option>
                        <option value="Federal District">Federal District</option>
                        <option value="Goiás">Goiás</option>
                        <option value="Maranhão">Maranhão</option>
                        <option value="Mato Grosso">Mato Grosso</option>
                        <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                        <option value="Minas Gerais">Minas Gerais</option>
                        <option value="Pará">Pará</option>
                        <option value="Paraíba">Paraíba</option>
                        <option value="Paraná">Paraná</option>
                        <option value="Pernambuco">Pernambuco</option>
                        <option value="Piauí">Piauí</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                        <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                        <option value="Rondônia">Rondônia</option>
                        <option value="Roraima">Roraima</option>
                        <option value="Santa Catarina">Santa Catarina</option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Sergipe">Sergipe</option>
                        <option value="Tocantins">Tocantins</option>
                    </>
                )
            case "British Indian Ocean Territory":
                return (
                    <>
                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                    </>
                )
            case "Brunei":
                return (
                    <>
                        <option value="Belait District">Belait District</option>
                        <option value="Brunei-Muara District">Brunei-Muara District</option>
                        <option value="Temburong District">Temburong District</option>
                        <option value="Tutong District">Tutong District</option>
                    </>
                )
            case "Bulgaria":
                return (
                    <>
                        <option value="Blagoevgrad Province">Blagoevgrad Province</option>
                        <option value="Burgas Province">Burgas Province</option>
                        <option value="Dobrich Province">Dobrich Province</option>
                        <option value="Gabrovo Province">Gabrovo Province</option>
                        <option value="Haskovo Province">Haskovo Province</option>
                        <option value="Kardzhali Province">Kardzhali Province</option>
                        <option value="Kyustendil Province">Kyustendil Province</option>
                        <option value="Lovech Province">Lovech Province</option>
                        <option value="Montana Province">Montana Province</option>
                        <option value="Pazardzhik Province">Pazardzhik Province</option>
                        <option value="Pernik Province">Pernik Province</option>
                        <option value="Pleven Province">Pleven Province</option>
                        <option value="Plovdiv Province">Plovdiv Province</option>
                        <option value="Razgrad Province">Razgrad Province</option>
                        <option value="Ruse Province">Ruse Province</option>
                        <option value="Shumen">Shumen</option>
                        <option value="Silistra Province">Silistra Province</option>
                        <option value="Sliven Province">Sliven Province</option>
                        <option value="Smolyan Province">Smolyan Province</option>
                        <option value="Sofia City Province">Sofia City Province</option>
                        <option value="Sofia Province">Sofia Province</option>
                        <option value="Stara Zagora Province">Stara Zagora Province</option>
                        <option value="Targovishte Province">Targovishte Province</option>
                        <option value="Varna Province">Varna Province</option>
                        <option value="Veliko Tarnovo Province">Veliko Tarnovo Province</option>
                        <option value="Vidin Province">Vidin Province</option>
                        <option value="Vratsa Province">Vratsa Province</option>
                        <option value="Yambol Province">Yambol Province</option>
                    </>
                )
            case "Burkinia Faso":
                return (
                    <>
                        <option value="Balé Province">Balé Province</option>
                        <option value="Bam Province">Bam Province</option>
                        <option value="Banwa Province">Banwa Province</option>
                        <option value="Bazèga Province">Bazèga Province</option>
                        <option value="Boucle du Mouhoun Region">Boucle du Mouhoun Region</option>
                        <option value="Bougouriba Province">Bougouriba Province</option>
                        <option value="Boulgou">Boulgou</option>
                        <option value="Cascades Region">Cascades Region</option>
                        <option value="Centre">Centre</option>
                        <option value="Centre-Est Region">Centre-Est Region</option>
                        <option value="Centre-Nord Region">Centre-Nord Region</option>
                        <option value="Centre-Ouest Region">Centre-Ouest Region</option>
                        <option value="Centre-Sud Region">Centre-Sud Region</option>
                        <option value="Comoé Province">Comoé Province</option>
                        <option value="Est Region">Est Region</option>
                        <option value="Ganzourgou Province">Ganzourgou Province</option>
                        <option value="Gnagna Province">Gnagna Province</option>
                        <option value="Gourma Province">Gourma Province</option>
                        <option value="Hauts-Bassins Region">Hauts-Bassins Region</option>
                        <option value="Houet Province">Houet Province</option>
                        <option value="Ioba Province">Ioba Province</option>
                        <option value="Kadiogo Province">Kadiogo Province</option>
                        <option value="Kénédougou Province">Kénédougou Province</option>
                        <option value="Komondjari Province">Komondjari Province</option>
                        <option value="Kompienga Province">Kompienga Province</option>
                        <option value="Kossi Province">Kossi Province</option>
                        <option value="Koulpélogo Province">Koulpélogo Province</option>
                        <option value="Kouritenga Province">Kouritenga Province</option>
                        <option value="Kourwéogo Province">Kourwéogo Province</option>
                        <option value="Léraba Province">Léraba Province</option>
                        <option value="Loroum Province">Loroum Province</option>
                        <option value="Mouhoun">Mouhoun</option>
                        <option value="Nahouri Province">Nahouri Province</option>
                        <option value="Namentenga Province">Namentenga Province</option>
                        <option value="Nayala Province">Nayala Province</option>
                        <option value="Nord Region, Burkina Faso">Nord Region, Burkina Faso</option>
                        <option value="Noumbiel Province">Noumbiel Province</option>
                        <option value="Oubritenga Province">Oubritenga Province</option>
                        <option value="Oudalan Province">Oudalan Province</option>
                        <option value="Passoré Province">Passoré Province</option>
                        <option value="Plateau-Central Region">Plateau-Central Region</option>
                        <option value="Poni Province">Poni Province</option>
                        <option value="Sahel Region">Sahel Region</option>
                        <option value="Sanguié Province">Sanguié Province</option>
                        <option value="Sanmatenga Province">Sanmatenga Province</option>
                        <option value="Séno Province">Séno Province</option>
                        <option value="Sissili Province">Sissili Province</option>
                        <option value="Soum Province">Soum Province</option>
                        <option value="Sourou Province">Sourou Province</option>
                        <option value="Sud-Ouest Region">Sud-Ouest Region</option>
                        <option value="Tapoa Province">Tapoa Province</option>
                        <option value="Tuy Province">Tuy Province</option>
                        <option value="Yagha Province">Yagha Province</option>
                        <option value="Yatenga Province">Yatenga Province</option>
                        <option value="Ziro Province">Ziro Province</option>
                        <option value="Zondoma Province">Zondoma Province</option>
                        <option value="Zoundwéogo Province">Zoundwéogo Province</option>
                    </>
                )
            case "Burundi":
                return (
                    <>
                        <option value="Bubanza Province">Bubanza Province</option>
                        <option value="Bujumbura Mairie Province">Bujumbura Mairie Province</option>
                        <option value="Bujumbura Rural Province">Bujumbura Rural Province</option>
                        <option value="Bururi Province">Bururi Province</option>
                        <option value="Cankuzo Province">Cankuzo Province</option>
                        <option value="Cibitoke Province">Cibitoke Province</option>
                        <option value="Gitega Province">Gitega Province</option>
                        <option value="Karuzi Province">Karuzi Province</option>
                        <option value="Kayanza Province">Kayanza Province</option>
                        <option value="Kirundo Province">Kirundo Province</option>
                        <option value="Makamba Province">Makamba Province</option>
                        <option value="Muramvya Province">Muramvya Province</option>
                        <option value="Muyinga Province">Muyinga Province</option>
                        <option value="Mwaro Province">Mwaro Province</option>
                        <option value="Ngozi Province">Ngozi Province</option>
                        <option value="Rumonge Province">Rumonge Province</option>
                        <option value="Rutana Province">Rutana Province</option>
                        <option value="Ruyigi Province">Ruyigi Province</option>
                    </>
                )
            case "Cambodia":
                return (
                    <>
                        <option value="Banteay Meanchey Province">Banteay Meanchey Province</option>
                        <option value="Battambang Province">Battambang Province</option>
                        <option value="Kampong Cham Province">Kampong Cham Province</option>
                        <option value="Kampong Chhnang Province">Kampong Chhnang Province</option>
                        <option value="Kampong Speu Province">Kampong Speu Province</option>
                        <option value="Kampot Province">Kampot Province</option>
                        <option value="Kandal Province">Kandal Province</option>
                        <option value="Kep Province">Kep Province</option>
                        <option value="Koh Kong Province">Koh Kong Province</option>
                        <option value="Kratié Province">Kratié Province</option>
                        <option value="Mondulkiri Province">Mondulkiri Province</option>
                        <option value="Oddar Meanchey Province">Oddar Meanchey Province</option>
                        <option value="Pailin Province">Pailin Province</option>
                        <option value="Phnom Penh">Phnom Penh</option>
                        <option value="Preah Vihear Province">Preah Vihear Province</option>
                        <option value="Prey Veng Province">Prey Veng Province</option>
                        <option value="Pursat Province">Pursat Province</option>
                        <option value="Ratanakiri Province">Ratanakiri Province</option>
                        <option value="Siem Reap Province">Siem Reap Province</option>
                        <option value="Sihanoukville Province">Sihanoukville Province</option>
                        <option value="Stung Treng Province">Stung Treng Province</option>
                        <option value="Svay Rieng Province">Svay Rieng Province</option>
                        <option value="Takéo Province">Takéo Province</option>
                        <option value="Tai Po District">Tai Po District</option>
                    </>
                ) 
            case "Cameroon":
                return (
                    <>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Centre">Centre</option>
                        <option value="East">East</option>
                        <option value="Far North">Far North</option>
                        <option value="Littoral">Littoral</option>
                        <option value="North">North</option>
                        <option value="Northwest">Northwest</option>
                        <option value="South">South</option>
                        <option value="Southwest">Southwest</option>
                        <option value="West">West</option>
                    </>
                )
            case "Canada":
                return (
                    <>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Northwest Territories">Northwest Territories</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Yukon">Yukon</option>
                    </>
                )
            case "Canary Islands":
                return (
                    <>
                        <option value="Canary Islands">Canary Islands</option>
                    </>
                )
            case "Cape Verde":
                return (
                    <>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Northwest Territories">Northwest Territories</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Yukon">Yukon</option>
                    </>
                )
            case "Cayman Islands":
                return (
                    <>
                        <option value="Cayman Islands">Cayman Islands</option>
                    </>
                )
            case "Central African Republic":
                return (
                    <>
                        <option value="Bamingui-Bangoran Prefecture">Bamingui-Bangoran Prefecture</option>
                        <option value="Bangui">Bangui</option>
                        <option value="Basse-Kotto Prefecture">Basse-Kotto Prefecture</option>
                        <option value="Haut-Mbomou Prefecture">Haut-Mbomou Prefecture</option>
                        <option value="Haute-Kotto Prefecture">Haute-Kotto Prefecture</option>
                        <option value="Kémo Prefecture">Kémo Prefecture</option>
                        <option value="Lobaye Prefecture">Lobaye Prefecture</option>
                        <option value="Mambéré-Kadéï">Mambéré-Kadéï</option>
                        <option value="Mbomou Prefecture">Mbomou Prefecture</option>
                        <option value="Nana-Grébizi Economic Prefecture">Nana-Grébizi Economic Prefecture</option>
                        <option value="Nana-Mambéré Prefecture">Nana-Mambéré Prefecture</option>
                        <option value="Ombella-M'Poko Prefecture">Ombella-M'Poko Prefecture</option>
                        <option value="Ouaka Prefecture">Ouaka Prefecture</option>
                        <option value="Ouham Prefecture">Ouham Prefecture</option>
                        <option value="Ouham-Pendé Prefecture">Ouham-Pendé Prefecture</option>
                        <option value="Sangha-Mbaéré">Sangha-Mbaéré</option>
                        <option value="Vakaga Prefecture">Vakaga Prefecture</option>
                    </>
                )
            case "Chad":
                return (
                    <>
                        <option value="Bahr el Gazel">Bahr el Gazel</option>
                        <option value="Batha Region">Batha Region</option>
                        <option value="Borkou">Borkou</option>
                        <option value="Ennedi Region">Ennedi Region</option>
                        <option value="Ennedi-Est">Ennedi-Est</option>
                        <option value="Ennedi-Ouest">Ennedi-Ouest</option>
                        <option value="Guéra Region">Guéra Region</option>
                        <option value="Hadjer-Lamis">Hadjer-Lamis</option>
                        <option value="Kanem Region">Kanem Region</option>
                        <option value="Lac Region">Lac Region</option>
                        <option value="Logone Occidental Region">Logone Occidental Region</option>
                        <option value="Logone Oriental Region">Logone Oriental Region</option>
                        <option value="Mandoul Region">Mandoul Region</option>
                        <option value="Mayo-Kebbi Est Region">Mayo-Kebbi Est Region</option>
                        <option value="Mayo-Kebbi Ouest Region">Mayo-Kebbi Ouest Region</option>
                        <option value="Moyen-Chari Region">Moyen-Chari Region</option>
                        <option value="N'Djamena">N'Djamena</option>
                        <option value="Ouaddaï Region">Ouaddaï Region</option>
                        <option value="Salamat Region">Salamat Region</option>
                        <option value="Sila Region">Sila Region</option>
                        <option value="Tandjilé Region">Tandjilé Region</option>
                        <option value="Tibesti Region">Tibesti Region</option>
                        <option value="Wadi Fira Region">Wadi Fira Region</option>
                    </>
                )
            case "Channel Islands":
                return (
                    <option value="Channel Islands">Channel Islands</option>
                )
            case "Chile":
                return (
                    <>
                        <option value="Antofagasta Region">Antofagasta Region</option>
                        <option value="Araucanía Region">Araucanía Region</option>
                        <option value="Arica y Parinacota Region">Arica y Parinacota Region</option>
                        <option value="Atacama Region">Atacama Region</option>
                        <option value="Aysén Region">Aysén Region</option>
                        <option value="Bío Bío Region">Bío Bío Region</option>
                        <option value="Coquimbo Region">Coquimbo Region</option>
                        <option value="Los Lagos Region">Los Lagos Region</option>
                        <option value="Los Ríos Region">Los Ríos Region</option>
                        <option value="Magellan and the Chilean Antarctic Region">Magellan and the Chilean Antarctic Region</option>
                        <option value="Maule Region">Maule Region</option>
                        <option value="Ñuble Region">Ñuble Region</option>
                        <option value="O'Higgins">O'Higgins</option>
                        <option value="Santiago Metropolitan Region">Santiago Metropolitan Region</option>
                        <option value="Tarapacá Region">Tarapacá Region</option>
                        <option value="Valparaíso">Valparaíso</option>
                    </>
                )
            case "China":
                return (
                    <>
                        <option value="Anhui">Anhui</option>
                        <option value="Beijing">Beijing</option>
                        <option value="Chongqing">Chongqing</option>
                        <option value="Fujian">Fujian</option>
                        <option value="Gansu">Gansu</option>
                        <option value="Guangdong">Guangdong</option>
                        <option value="Guangxi Zhuang Autonomous Region">Guangxi Zhuang Autonomous Region</option>
                        <option value="Guizhou">Guizhou</option>
                        <option value="Hainan">Hainan</option>
                        <option value="Hebei">Hebei</option>
                        <option value="Heilongjiang">Heilongjiang</option>
                        <option value="Henan">Henan</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hubei">Hubei</option>
                        <option value="Hunan">Hunan</option>
                        <option value="Inner Mongolia">Inner Mongolia</option>
                        <option value="Jiangsu">Jiangsu</option>
                        <option value="Jiangxi">Jiangxi</option>
                        <option value="Jilin">Jilin</option>
                        <option value="Keelung">Keelung</option>
                        <option value="Liaoning">Liaoning</option>
                        <option value="Macau">Macau</option>
                        <option value="Ningxia Hui Autonomous Region">Ningxia Hui Autonomous Region</option>
                        <option value="Qinghai">Qinghai</option>
                        <option value="Shaanxi">Shaanxi</option>
                        <option value="Shandong">Shandong</option>
                        <option value="Shanghai">Shanghai</option>
                        <option value="Shanxi">Shanxi</option>
                        <option value="Sichuan">Sichuan</option>
                        <option value="Taiwan Province, People's Republic of China">Taiwan Province, People's Republic of China</option>
                        <option value="Tibet Autonomous Region">Tibet Autonomous Region</option>
                        <option value="Xinjiang">Xinjiang</option>
                        <option value="Yunnan">Yunnan</option>
                        <option value="Zhejiang">Zhejiang</option>
                    </>
                )
            case "Christmas Island":
                return (
                    <>
                        <option value="Christmas Island">Christmas Island</option>
                    </>
                )
            case "Cocos Island":
                return (
                    <>
                        <option value="Cocos Island">Cocos Island</option>
                    </>
                )
            case "Colombia":
                return (
                    <>
                        <option value="Amazonas Department">Amazonas Department</option>
                        <option value="Antioquia Department">Antioquia Department</option>
                        <option value="Arauca Department">Arauca Department</option>
                        <option value="Archipelago of Saint Andréws, Providence and Saint Catalina">Archipelago of Saint Andréws, Providence and Saint Catalina</option>
                        <option value="Atlántico Department">Atlántico Department</option>
                        <option value="Bolívar Department">Bolívar Department</option>
                        <option value="Boyacá Department">Boyacá Department</option>
                        <option value="Caldas Department">Caldas Department</option>
                        <option value="Caquetá Department">Caquetá Department</option>
                        <option value="Casanare Department">Casanare Department</option>
                        <option value="Cauca Department">Cauca Department</option>
                        <option value="Cesar Department">Cesar Department</option>
                        <option value="Chocó Department">Chocó Department</option>
                        <option value="Córdoba Department">Córdoba Department</option>
                        <option value="Cundinamarca Department">Cundinamarca Department</option>
                        <option value="Guainía Department">Guainía Department</option>
                        <option value="Guaviare Department">Guaviare Department</option>
                        <option value="Huila Department">Huila Department</option>
                        <option value="La Guajira Department">La Guajira Department</option>
                        <option value="Magdalena Department">Magdalena Department</option>
                        <option value="Meta">Meta</option>
                        <option value="Nariño Department">Nariño Department</option>
                        <option value="Norte de Santander Department">Norte de Santander Department</option>
                        <option value="Putumayo Department">Putumayo Department</option>
                        <option value="Quindío Department">Quindío Department</option>
                        <option value="Risaralda Department">Risaralda Department</option>
                        <option value="Santander Department">Santander Department</option>
                        <option value="Sucre Department">Sucre Department</option>
                        <option value="Tolima Department">Tolima Department</option>
                        <option value="Valle del Cauca Department">Valle del Cauca Department</option>
                        <option value="Vaupés Department">Vaupés Department</option>
                        <option value="Vichada Department">Vichada Department</option>
                    </>
                )
            case "Comoros":
                return (
                    <>
                        <option value="Anjouan">Anjouan</option>
                        <option value="Grande Comore">Grande Comore</option>
                        <option value="Mohéli">Mohéli</option>
                    </>
                )
            case "Congo":
                return (
                    <>
                        <option value="Bouenza Department">Bouenza Department</option>
                        <option value="Brazzaville">Brazzaville</option>
                        <option value="Cuvette Department">Cuvette Department</option>
                        <option value="Cuvette-Ouest Department">Cuvette-Ouest Department</option>
                        <option value="Kouilou Department">Kouilou Department</option>
                        <option value="Lékoumou Department">Lékoumou Department</option>
                        <option value="Likouala Department">Likouala Department</option>
                        <option value="Niari Department">Niari Department</option>
                        <option value="Plateaux Department">Plateaux Department</option>
                        <option value="Pointe-Noire">Pointe-Noire</option>
                        <option value="Pool Department">Pool Department</option>
                        <option value="Sangha Department">Sangha Department</option>
                    </>
                )
            case "Congo, Democratic Republic of the Congo":
                return (
                    <>
                        <option value="Bandundu Province">Bandundu Province</option>
                        <option value="Bas-Congo province">Bas-Congo province</option>
                        <option value="Bas-Uele">Bas-Uele</option>
                        <option value="Équateur">Équateur</option>
                        <option value="Haut-Katanga Province">Haut-Katanga Province</option>
                        <option value="Haut-Lomami District">Haut-Lomami District</option>
                        <option value="Haut-Uele">Haut-Uele</option>
                        <option value="Ituri Interim Administration">Ituri Interim Administration</option>
                        <option value="Kasaï District">Kasaï District</option>
                        <option value="Kasaï-Occidental">Kasaï-Occidental</option>
                        <option value="Kasaï-Oriental">Kasaï-Oriental</option>
                        <option value="Katanga Province">Katanga Province</option>
                        <option value="Kinshasa">Kinshasa</option>
                        <option value="Kwango District">Kwango District</option>
                        <option value="Kwilu District">Kwilu District</option>
                        <option value="Lomami Province">Lomami Province</option>
                        <option value="Mai-Ndombe Province">Mai-Ndombe Province</option>
                        <option value="Maniema">Maniema</option>
                        <option value="Mongala District">Mongala District</option>
                        <option value="Nord-Ubangi District">Nord-Ubangi District</option>
                        <option value="North Kivu">North Kivu</option>
                        <option value="Orientale Province">Orientale Province</option>
                        <option value="Sankuru District">Sankuru District</option>
                        <option value="South Kivu">South Kivu</option>
                        <option value="Sud-Ubangi">Sud-Ubangi</option>
                        <option value="Tanganyika Province">Tanganyika Province</option>
                        <option value="Tshopo District">Tshopo District</option>
                        <option value="Tshuapa District">Tshuapa District</option>
                    </>
                )
            case "Cook Islands":
                return (
                    <>
                        <option value="Cook Islands">Cook Islands</option>
                    </>
                )
            case "Costa Rica":
                return (
                    <>
                        <option value="Alajuela Province">Alajuela Province</option>
                        <option value="Guanacaste Province">Guanacaste Province</option>
                        <option value="Heredia Province">Heredia Province</option>
                        <option value="Limón Province">Limón Province</option>
                        <option value="Provincia de Cartago">Provincia de Cartago</option>
                        <option value="Puntarenas Province">Puntarenas Province</option>
                        <option value="San José Province">San José Province</option>
                    </>
                )
            case "Corte D'Ivoire":
                return (
                    <>
                        <option value="Abidjan">Abidjan</option>
                        <option value="Agnéby">Agnéby</option>
                        <option value="Bafing Region">Bafing Region</option>
                        <option value="Bas-Sassandra District">Bas-Sassandra District</option>
                        <option value="Bas-Sassandra Region">Bas-Sassandra Region</option>
                        <option value="Comoé District">Comoé District</option>
                        <option value="Denguélé District">Denguélé District</option>
                        <option value="Denguélé Region">Denguélé Region</option>
                        <option value="Dix-Huit Montagnes">Dix-Huit Montagnes</option>
                        <option value="Fromager">Fromager</option>
                        <option value="Gôh-Djiboua District">Gôh-Djiboua District</option>
                        <option value="Haut-Sassandra">Haut-Sassandra</option>
                        <option value="Lacs District">Lacs District</option>
                        <option value="Lacs Region">Lacs Region</option>
                        <option value="Lagunes District">Lagunes District</option>
                        <option value="Lagunes region">Lagunes region</option>
                        <option value="Marahoué Region">Marahoué Region</option>
                        <option value="Montagnes District">Montagnes District</option>
                        <option value="Moyen-Cavally">Moyen-Cavally</option>
                        <option value="Moyen-Comoé">Moyen-Comoé</option>
                        <option value="N'zi-Comoé">N'zi-Comoé</option>
                        <option value="Sassandra-Marahoué District">Sassandra-Marahoué District</option>
                        <option value="Savanes Region">Savanes Region</option>
                        <option value="Sud-Bandama">Sud-Bandama</option>
                        <option value="Sud-Comoé">Sud-Comoé</option>
                        <option value="Vallée du Bandama District">Vallée du Bandama District</option>
                        <option value="Vallée du Bandama Region">Vallée du Bandama Region</option>
                        <option value="Woroba District">Woroba District</option>
                        <option value="Worodougou">Worodougou</option>
                        <option value="Yamoussoukro">Yamoussoukro</option>
                        <option value="Zanzan Region">Zanzan Region</option>
                    </>
                )
            case "Croatia":
                return (
                    <>
                        <option value="Bjelovar-Bilogora County">Bjelovar-Bilogora County</option>
                        <option value="Brod-Posavina County">Brod-Posavina County</option>
                        <option value="Dubrovnik-Neretva County">Dubrovnik-Neretva County</option>
                        <option value="Istria County">Istria County</option>
                        <option value="Koprivnica-Križevci County">Koprivnica-Križevci County</option>
                        <option value="Krapina-Zagorje County">Krapina-Zagorje County</option>
                        <option value="Lika-Senj County">Lika-Senj County</option>
                        <option value="Međimurje County">Međimurje County</option>
                        <option value="Osijek-Baranja County">Osijek-Baranja County</option>
                        <option value="Požega-Slavonia County">Požega-Slavonia County</option>
                        <option value="Primorje-Gorski Kotar County">Primorje-Gorski Kotar County</option>
                        <option value="Šibenik-Knin County">Šibenik-Knin County</option>
                        <option value="Sisak-Moslavina County">Sisak-Moslavina County</option>
                        <option value="Split-Dalmatia County">Split-Dalmatia County</option>
                        <option value="Varaždin County">Varaždin County</option>
                        <option value="Virovitica-Podravina County">Virovitica-Podravina County</option>
                        <option value="Vukovar-Syrmia County">Vukovar-Syrmia County</option>
                        <option value="Zadar County">Zadar County</option>
                        <option value="Zagreb">Zagreb</option>
                        <option value="Zagreb County">Zagreb County</option>
                    </>
                )
            case "Cuba":
                return (
                    <>
                        <option value="Artemisa Province">Artemisa Province</option>
                        <option value="Camagüey Province">Camagüey Province</option>
                        <option value="Ciego de Ávila Province">Ciego de Ávila Province</option>
                        <option value="Cienfuegos Province">Cienfuegos Province</option>
                        <option value="Granma Province">Granma Province</option>
                        <option value="Guantánamo Province">Guantánamo Province</option>
                        <option value="Havana Province">Havana Province</option>
                        <option value="Holguín Province">Holguín Province</option>
                        <option value="Isla de la Juventud">Isla de la Juventud</option>
                        <option value="Las Tunas Province">Las Tunas Province</option>
                        <option value="Matanzas Province">Matanzas Province</option>
                        <option value="Mayabeque Province">Mayabeque Province</option>
                        <option value="Pinar del Río Province">Pinar del Río Province</option>
                        <option value="Sancti Spíritus Province">Sancti Spíritus Province</option>
                        <option value="Santiago de Cuba Province">Santiago de Cuba Province</option>
                        <option value="Villa Clara Province">Villa Clara Province</option>
                    </>
                )
            case "Curacao":
                return (
                    <>
                        <option value="Curacao">Curacao</option>
                    </>
                )
            case "Cyprus":
                return (
                    <>
                        <option value="Famagusta District">Famagusta District</option>
                        <option value="Kyrenia District">Kyrenia District</option>
                        <option value="Larnaca District">Larnaca District</option>
                        <option value="Limassol District">Limassol District</option>
                        <option value="Nicosia District">Nicosia District</option>
                        <option value="Paphos District">Paphos District</option>
                    </>
                )
            case "Czech Republic":
                return (
                    <>
                        <option value="Capital Region of Denmark">Capital Region of Denmark</option>
                        <option value="Central Denmark Region">Central Denmark Region</option>
                        <option value="North Denmark Region">North Denmark Region</option>
                        <option value="Region of Southern Denmark">Region of Southern Denmark</option>
                        <option value="Region Zealand">Region Zealand</option>
                    </>
                )
            case "Djibouti":
                return (
                    <>
                        <option value="Ali Sabieh Region">Ali Sabieh Region</option>
                        <option value="Arta Region">Arta Region</option>
                        <option value="Dikhil Region">Dikhil Region</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Obock Region">Obock Region</option>
                        <option value="Tadjourah Region">Tadjourah Region</option>
                    </>
                )
            case "Dominica":
                return (
                    <>
                        <option value="Saint Andrew Parish">Saint Andrew Parish</option>
                        <option value="Saint David Parish">Saint David Parish</option>
                        <option value="Saint George Parish">Saint George Parish</option>
                        <option value="Saint John Parish">Saint John Parish</option>
                        <option value="Saint Joseph Parish">Saint Joseph Parish</option>
                        <option value="Saint Luke Parish">Saint Luke Parish</option>
                        <option value="Saint Mark Parish">Saint Mark Parish</option>
                        <option value="Saint Patrick Parish">Saint Patrick Parish</option>
                        <option value="Saint Paul Parish">Saint Paul Parish</option>
                        <option value="Saint Peter Parish">Saint Peter Parish</option>
                    </>
                )
            case "Dominican Republic":
                return (
                    <>
                        <option value="Azua Province">Azua Province</option>
                        <option value="Baoruco Province">Baoruco Province</option>
                        <option value="Barahona Province">Barahona Province</option>
                        <option value="Dajabón Province">Dajabón Province</option>
                        <option value="Distrito Nacional">Distrito Nacional</option>
                        <option value="Duarte Province">Duarte Province</option>
                        <option value="El Seibo Province">El Seibo Province</option>
                        <option value="Espaillat Province">Espaillat Province</option>
                        <option value="Hato Mayor Province">Hato Mayor Province</option>
                        <option value="Hermanas Mirabal Province">Hermanas Mirabal Province</option>
                        <option value="Independencia">Independencia</option>
                        <option value="La Altagracia Province">La Altagracia Province</option>
                        <option value="La Romana Province">La Romana Province</option>
                        <option value="La Vega Province">La Vega Province</option>
                        <option value="María Trinidad Sánchez Province">María Trinidad Sánchez Province</option>
                        <option value="Monseñor Nouel Province">Monseñor Nouel Province</option>
                        <option value="Monte Cristi Province">Monte Cristi Province</option>
                        <option value="Monte Plata Province">Monte Plata Province</option>
                        <option value="Pedernales Province">Pedernales Province</option>
                        <option value="Peravia Province">Peravia Province</option>
                        <option value="Puerto Plata Province">Puerto Plata Province</option>
                        <option value="Samaná Province">Samaná Province</option>
                        <option value="San Cristóbal Province">San Cristóbal Province</option>
                        <option value="San José de Ocoa Province">San José de Ocoa Province</option>
                        <option value="San Juan Province">San Juan Province</option>
                        <option value="San Pedro de Macorís">San Pedro de Macorís</option>
                        <option value="Sánchez Ramírez Province">Sánchez Ramírez Province</option>
                        <option value="Santiago Province">Santiago Province</option>
                        <option value="Santiago Rodríguez Province">Santiago Rodríguez Province</option>
                        <option value="Santo Domingo Province">Santo Domingo Province</option>
                        <option value="Valverde Province">Valverde Province</option>
                    </>
                )
            case "East Timor":
                return (
                    <>
                        <option value="East Timor">East Timor</option>
                    </>
                )
            case "Ecuador":
                return (
                    <>
                        <option value="Azuay Province">Azuay Province</option>
                        <option value="Bolívar Province">Bolívar Province</option>
                        <option value="Cañar Province">Cañar Province</option>
                        <option value="Carchi Province">Carchi Province</option>
                        <option value="Chimborazo Province">Chimborazo Province</option>
                        <option value="Cotopaxi Province">Cotopaxi Province</option>
                        <option value="El Oro Province">El Oro Province</option>
                        <option value="Esmeraldas">Esmeraldas</option>
                        <option value="Galápagos Province">Galápagos Province</option>
                        <option value="Guayas Province">Guayas Province</option>
                        <option value="Imbabura Province">Imbabura Province</option>
                        <option value="Los Ríos Province">Los Ríos Province</option>
                        <option value="Manabí Province">Manabí Province</option>
                        <option value="Morona-Santiago Province">Morona-Santiago Province</option>
                        <option value="Napo Province">Napo Province</option>
                        <option value="Orellana Province">Orellana Province</option>
                        <option value="Pastaza Province">Pastaza Province</option>
                        <option value="Pichincha Province">Pichincha Province</option>
                        <option value="Santa Elena Province">Santa Elena Province</option>
                        <option value="Santo Domingo de los Tsáchilas Province">Santo Domingo de los Tsáchilas Province</option>
                        <option value="Sucumbíos Province">Sucumbíos Province</option>
                        <option value="Tungurahua Province">Tungurahua Province</option>
                        <option value="Zamora-Chinchipe Province">Zamora-Chinchipe Province</option>
                    </>
                )
            case "Egypt":
                return (
                    <>
                        <option value="Alexandria Governorate">Alexandria Governorate</option>
                        <option value="Aswan Governorate">Aswan Governorate</option>
                        <option value="Asyut Governorate">Asyut Governorate</option>
                        <option value="Beheira Governorate">Beheira Governorate</option>
                        <option value="Beni Suef Governorate">Beni Suef Governorate</option>
                        <option value="Cairo Governorate">Cairo Governorate</option>
                        <option value="Dakahlia Governorate">Dakahlia Governorate</option>
                        <option value="Damietta Governorate">Damietta Governorate</option>
                        <option value="Faiyum Governorate">Faiyum Governorate</option>
                        <option value="Gharbia Governorate">Gharbia Governorate</option>
                        <option value="Giza Governorate">Giza Governorate</option>
                        <option value="Ismailia Governorate">Ismailia Governorate</option>
                        <option value="Kafr el-Sheikh Governorate">Kafr el-Sheikh Governorate</option>
                        <option value="Luxor Governorate">Luxor Governorate</option>
                        <option value="Matrouh Governorate">Matrouh Governorate</option>
                        <option value="Minya Governorate">Minya Governorate</option>
                        <option value="Monufia Governorate">Monufia Governorate</option>
                        <option value="New Valley Governorate">New Valley Governorate</option>
                        <option value="North Sinai Governorate">North Sinai Governorate</option>
                        <option value="Port Said Governorate">Port Said Governorate</option>
                        <option value="Qalyubia Governorate">Qalyubia Governorate</option>
                        <option value="Qena Governorate">Qena Governorate</option>
                        <option value="Red Sea Governorate">Red Sea Governorate</option>
                        <option value="Sohag Governorate">Sohag Governorate</option>
                        <option value="South Sinai Governorate">South Sinai Governorate</option>
                        <option value="Suez Governorate">Suez Governorate</option>
                    </>
                )
            case "El Salvador":
                return (
                    <>
                        <option value="Ahuachapán Department">Ahuachapán Department</option>
                        <option value="Cabañas Department">Cabañas Department</option>
                        <option value="Chalatenango Department">Chalatenango Department</option>
                        <option value="Cuscatlán Department">Cuscatlán Department</option>
                        <option value="La Libertad Department">La Libertad Department</option>
                        <option value="La Paz Department">La Paz Department</option>
                        <option value="La Unión Department">La Unión Department</option>
                        <option value="Morazán Department">Morazán Department</option>
                        <option value="San Miguel Department">San Miguel Department</option>
                        <option value="San Salvador Department">San Salvador Department</option>
                        <option value="San Vicente Department">San Vicente Department</option>
                        <option value="Santa Ana Department">Santa Ana Department</option>
                        <option value="Sonsonate Department">Sonsonate Department</option>
                        <option value="Usulután Department">Usulután Department</option>
                    </>
                )
            case "Equatorial Guinea":
                return (
                    <>
                        <option value="Annobón Province">Annobón Province</option>
                        <option value="Bioko Norte Province">Bioko Norte Province</option>
                        <option value="Bioko Sur Province">Bioko Sur Province</option>
                        <option value="Centro Sur Province">Centro Sur Province</option>
                        <option value="Insular Region">Insular Region</option>
                        <option value="Kié-Ntem Province">Kié-Ntem Province</option>
                        <option value="Litoral Province">Litoral Province</option>
                        <option value="Río Muni">Río Muni</option>
                        <option value="Wele-Nzas Province">Wele-Nzas Province</option>
                    </>
                )
            case "Eritrea":
                return (
                    <>
                        <option value="Anseba Region">Anseba Region</option>
                        <option value="Debub Region">Debub Region</option>
                        <option value="Gash-Barka Region">Gash-Barka Region</option>
                        <option value="Maekel Region">Maekel Region</option>
                        <option value="Northern Red Sea Region">Northern Red Sea Region</option>
                        <option value="Southern Red Sea Region">Southern Red Sea Region</option>
                    </>
                )
            case "Estonia":
                return (
                    <>
                        <option value="Harju County">Harju County</option>
                        <option value="Hiiu County">Hiiu County</option>
                        <option value="Ida-Viru County">Ida-Viru County</option>
                        <option value="Järva County">Järva County</option>
                        <option value="Jõgeva County">Jõgeva County</option>
                        <option value="Lääne County">Lääne County</option>
                        <option value="Lääne-Viru County">Lääne-Viru County</option>
                        <option value="Pärnu County">Pärnu County</option>
                        <option value="Põlva County">Põlva County</option>
                        <option value="Rapla County">Rapla County</option>
                        <option value="Saare County">Saare County</option>
                        <option value="Tartu County">Tartu County</option>
                        <option value="Valga County">Valga County</option>
                        <option value="Viljandi County">Viljandi County</option>
                        <option value="Võru County">Võru County</option>
                    </>
                )
            case "Ethiopia":
                return (
                    <>
                        <option value="Addis Ababa">Addis Ababa</option>
                        <option value="Afar Region">Afar Region</option>
                        <option value="Amhara Region">Amhara Region</option>
                        <option value="Benishangul-Gumuz Region">Benishangul-Gumuz Region</option>
                        <option value="Dire Dawa">Dire Dawa</option>
                        <option value="Gambela Region">Gambela Region</option>
                        <option value="Harari Region">Harari Region</option>
                        <option value="Oromia Region">Oromia Region</option>
                        <option value="Somali Region">Somali Region</option>
                        <option value="Southern Nations, Nationalities, and Peoples' Region">Southern Nations, Nationalities, and Peoples' Region</option>
                        <option value="Tigray Region">Tigray Region</option>
                    </>
                )
            case "Falkland Islands":
                return (
                    <>
                        <option value="Falkland Islands">Falkland Islands</option>
                    </>
                )
            case "Faroe Islands":
                return (
                    <>
                        <option value="Faroe Islands">Faroe Islands</option>
                    </>
                )
            case "Fiji":
                return (
                    <>
                        <option value="Ba">Ba</option>
                        <option value="Bua">Bua</option>
                        <option value="Cakaudrove">Cakaudrove</option>
                        <option value="Central Division">Central Division</option>
                        <option value="Eastern Division">Eastern Division</option>
                        <option value="Kadavu">Kadavu</option>
                        <option value="Lau">Lau</option>
                        <option value="Lomaiviti">Lomaiviti</option>
                        <option value="Macuata">Macuata</option>
                        <option value="Nadroga-Navosa">Nadroga-Navosa</option>
                        <option value="Naitasiri">Naitasiri</option>
                        <option value="Namosi">Namosi</option>
                        <option value="Northern Division">Northern Division</option>
                        <option value="Ra">Ra</option>
                        <option value="Rewa">Rewa</option>
                        <option value="Rotuma">Rotuma</option>
                        <option value="Serua">Serua</option>
                        <option value="Tailevu">Tailevu</option>
                        <option value="Western Division">Western Division</option>
                    </>
                )
            case "Finland":
                return (
                    <>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Central Finland">Central Finland</option>
                        <option value="Central Ostrobothnia">Central Ostrobothnia</option>
                        <option value="Eastern Finland Province">Eastern Finland Province</option>
                        <option value="Finland Proper">Finland Proper</option>
                        <option value="Kainuu">Kainuu</option>
                        <option value="Kymenlaakso">Kymenlaakso</option>
                        <option value="Lapland">Lapland</option>
                        <option value="North Karelia">North Karelia</option>
                        <option value="Northern Ostrobothnia">Northern Ostrobothnia</option>
                        <option value="Northern Savonia">Northern Savonia</option>
                        <option value="Ostrobothnia">Ostrobothnia</option>
                        <option value="Oulu Province">Oulu Province</option>
                        <option value="Päijänne Tavastia">Päijänne Tavastia</option>
                        <option value="Pirkanmaa">Pirkanmaa</option>
                        <option value="Satakunta">Satakunta</option>
                        <option value="South Karelia">South Karelia</option>
                        <option value="Southern Ostrobothnia">Southern Ostrobothnia</option>
                        <option value="Southern Savonia">Southern Savonia</option>
                        <option value="Tavastia Proper">Tavastia Proper</option>
                        <option value="Uusimaa">Uusimaa</option>
                    </>
                )
            case "France":
                return (
                    <>
                        <option value="Alo">Alo</option>
                        <option value="Alsace">Alsace</option>
                        <option value="Aquitaine">Aquitaine</option>
                        <option value="Auvergne">Auvergne</option>
                        <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
                        <option value="Bourgogne-Franche-Comté">Bourgogne-Franche-Comté</option>
                        <option value="Brittany">Brittany</option>
                        <option value="Burgundy">Burgundy</option>
                        <option value="Centre-Val de Loire">Centre-Val de Loire</option>
                        <option value="Champagne-Ardenne">Champagne-Ardenne</option>
                        <option value="Corsica">Corsica</option>
                        <option value="Franche-Comté">Franche-Comté</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="Grand Est">Grand Est</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Hauts-de-France">Hauts-de-France</option>
                        <option value="Île-de-France">Île-de-France</option>
                        <option value="Languedoc-Roussillon">Languedoc-Roussillon</option>
                        <option value="Limousin">Limousin</option>
                        <option value="Lorraine">Lorraine</option>
                        <option value="Lower Normandy">Lower Normandy</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Nord-Pas-de-Calais">Nord-Pas-de-Calais</option>
                        <option value="Normandy">Normandy</option>
                        <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
                        <option value="Occitania">Occitania</option>
                        <option value="Paris">Paris</option>
                        <option value="Pays de la Loire">Pays de la Loire</option>
                        <option value="Picardy">Picardy</option>
                        <option value="Poitou-Charentes">Poitou-Charentes</option>
                        <option value="Provence-Alpes-Côte d'Azur">Provence-Alpes-Côte d'Azur</option>
                        <option value="Réunion">Réunion</option>
                        <option value="Rhône-Alpes">Rhône-Alpes</option>
                        <option value="Saint Barthélemy">Saint Barthélemy</option>
                        <option value="Saint Martin">Saint Martin</option>
                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                        <option value="Sigave">Sigave</option>
                        <option value="Upper Normandy">Upper Normandy</option>
                        <option value="Uvea">Uvea</option>
                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                    </>
                )
            case "French Guina":
                return (
                    <>
                        <option value="French Guiana">French Guiana</option>
                    </>
                )
            case "French Polynesia":
                return (
                    <>
                        <option value="French Polynesia">French Polynesia</option>
                    </>
                )
            case "French Southern Territories":
                return (
                    <>
                        <option value="French Southern Territories">French Southern Territories</option>
                    </>
                )
            case "Gabon":
                return (
                    <>
                        <option value="Estuaire Province">Estuaire Province</option>
                        <option value="Haut-Ogooué Province">Haut-Ogooué Province</option>
                        <option value="Moyen-Ogooué Province">Moyen-Ogooué Province</option>
                        <option value="Ngounié Province">Ngounié Province</option>
                        <option value="Nyanga Province">Nyanga Province</option>
                        <option value="Ogooué-Ivindo Province">Ogooué-Ivindo Province</option>
                        <option value="Ogooué-Lolo Province">Ogooué-Lolo Province</option>
                        <option value="Ogooué-Maritime Province">Ogooué-Maritime Province</option>
                        <option value="Woleu-Ntem Province">Woleu-Ntem Province</option>
                    </>
                )
            case "Gambia":
                return (
                    <>
                        <option value="Banjul">Banjul</option>
                        <option value="Central River Division">Central River Division</option>
                        <option value="Lower River Division">Lower River Division</option>
                        <option value="North Bank Division">North Bank Division</option>
                        <option value="Upper River Division">Upper River Division</option>
                        <option value="West Coast Division">West Coast Division</option>
                    </>
                )
            case "Georgia":
                return (
                    <>
                        <option value="Adjara">Adjara</option>
                        <option value="Autonomous Republic of Abkhazia">Autonomous Republic of Abkhazia</option>
                        <option value="Guria">Guria</option>
                        <option value="Imereti">Imereti</option>
                        <option value="Kakheti">Kakheti</option>
                        <option value="Khelvachauri Municipality">Khelvachauri Municipality</option>
                        <option value="Kvemo Kartli">Kvemo Kartli</option>
                        <option value="Mtskheta-Mtianeti">Mtskheta-Mtianeti</option>
                        <option value="Racha-Lechkhumi and Kvemo Svaneti">Racha-Lechkhumi and Kvemo Svaneti</option>
                        <option value="Samegrelo-Zemo Svaneti">Samegrelo-Zemo Svaneti</option>
                        <option value="Samtskhe-Javakheti">Samtskhe-Javakheti</option>
                        <option value="Senaki Municipality">Senaki Municipality</option>
                        <option value="Shida Kartli">Shida Kartli</option>
                        <option value="Tbilisi">Tbilisi</option>
                    </>
                )
            case "Germany":
                return (
                    <>
                        <option value="Baden-Württemberg">Baden-Württemberg</option>
                        <option value="Bavaria">Bavaria</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Brandenburg">Brandenburg</option>
                        <option value="Bremen">Bremen</option>
                        <option value="Hamburg">Hamburg</option>
                        <option value="Hesse">Hesse</option>
                        <option value="Lower Saxony">Lower Saxony</option>
                        <option value="Mecklenburg-Vorpommern">Mecklenburg-Vorpommern</option>
                        <option value="North Rhine-Westphalia">North Rhine-Westphalia</option>
                        <option value="Rhineland-Palatinate">Rhineland-Palatinate</option>
                        <option value="Saarland">Saarland</option>
                        <option value="Saxony">Saxony</option>
                        <option value="Saxony-Anhalt">Saxony-Anhalt</option>
                        <option value="Schleswig-Holstein">Schleswig-Holstein</option>
                        <option value="Thuringia">Thuringia</option>
                    </>
                )
            case "Ghana":
                return (
                    <>
                        <option value="Ashanti Region">Ashanti Region</option>
                        <option value="Brong-Ahafo Region">Brong-Ahafo Region</option>
                        <option value="Central Region">Central Region</option>
                        <option value="Eastern Region">Eastern Region</option>
                        <option value="Greater Accra Region">Greater Accra Region</option>
                        <option value="Northern Region">Northern Region</option>
                        <option value="Upper East Region">Upper East Region</option>
                        <option value="Upper West Region">Upper West Region</option>
                        <option value="Volta Region">Volta Region</option>
                        <option value="Western Region">Western Region</option>
                    </>
                )
            case "Gibraltar":
                return (
                    <>
                        <option value="Gibraltar">Gibraltar</option>
                    </>
                )
            case "Great Britain":
                return (
                    <>
                        <option value="Great Britain">Great Britain</option>
                    </>
                )
            case "Greece":
                return (
                    <>
                        <option value="Achaea Regional Unit">Achaea Regional Unit</option>
                        <option value="Aetolia-Acarnania Regional Unit">Aetolia-Acarnania Regional Unit</option>
                        <option value="Arcadia Prefecture">Arcadia Prefecture</option>
                        <option value="Argolis Regional Unit">Argolis Regional Unit</option>
                        <option value="Attica Region">Attica Region</option>
                        <option value="Boeotia Regional Unit">Boeotia Regional Unit</option>
                        <option value="Central Greece Region">Central Greece Region</option>
                        <option value="Central Macedonia">Central Macedonia</option>
                        <option value="Chania Regional Unit">Chania Regional Unit</option>
                        <option value="Corfu Prefecture">Corfu Prefecture</option>
                        <option value="Corinthia Regional Unit">Corinthia Regional Unit</option>
                        <option value="Crete Region">Crete Region</option>
                        <option value="Drama Regional Unit">Drama Regional Unit</option>
                        <option value="East Attica Regional Unit">East Attica Regional Unit</option>
                        <option value="East Macedonia and Thrace">East Macedonia and Thrace</option>
                        <option value="Epirus Region">Epirus Region</option>
                        <option value="Euboea">Euboea</option>
                        <option value="Grevena Prefecture">Grevena Prefecture</option>
                        <option value="Imathia Regional Unit">Imathia Regional Unit</option>
                        <option value="Ioannina Regional Unit">Ioannina Regional Unit</option>
                        <option value="Ionian Islands Region">Ionian Islands Region</option>
                        <option value="Karditsa Regional Unit">Karditsa Regional Unit</option>
                        <option value="Kastoria Regional Unit">Kastoria Regional Unit</option>
                        <option value="Kefalonia Prefecture">Kefalonia Prefecture</option>
                        <option value="Kilkis Regional Unit">Kilkis Regional Unit</option>
                        <option value="Kozani Prefecture">Kozani Prefecture</option>
                        <option value="Laconia">Laconia</option>
                        <option value="Larissa Prefecture">Larissa Prefecture</option>
                        <option value="Lefkada Regional Unit">Lefkada Regional Unit</option>
                        <option value="Pella Regional Unit">Pella Regional Unit</option>
                        <option value="Peloponnese Region">Peloponnese Region</option>
                        <option value="Phthiotis Prefecture">Phthiotis Prefecture</option>
                        <option value="Preveza Prefecture">Preveza Prefecture</option>
                        <option value="Serres Prefecture">Serres Prefecture</option>
                        <option value="South Aegean">South Aegean</option>
                        <option value="Thessaloniki Regional Unit">Thessaloniki Regional Unit</option>
                        <option value="West Greece Region">West Greece Region</option>
                        <option value="West Macedonia Region">West Macedonia Region</option>
                    </>
                )
            case "Greenland":
                return (
                    <>
                        <option value="Greenland">Greenland</option>
                    </>
                )
            case "Grenada":
                return (
                    <>
                        <option value="Carriacou and Petite Martinique">Carriacou and Petite Martinique</option>
                        <option value="Saint Andrew Parish">Saint Andrew Parish</option>
                        <option value="Saint David Parish">Saint David Parish</option>
                        <option value="Saint George Parish">Saint George Parish</option>
                        <option value="Saint John Parish">Saint John Parish</option>
                        <option value="Saint Mark Parish">Saint Mark Parish</option>
                        <option value="Saint Patrick Parish">Saint Patrick Parish</option>
                    </>
                )
            case "Guadeloupe":
                return (
                    <>
                        <option value="Guadeloupe">Guadeloupe</option>
                    </>
                )
            case "Guam":
                return (
                    <>
                        <option value="Guam">Guam</option>
                    </>
                )
            case "Guatemala":
                return (
                    <>
                        <option value="Alta Verapaz Department">Alta Verapaz Department</option>
                        <option value="Baja Verapaz Department">Baja Verapaz Department</option>
                        <option value="Chimaltenango Department">Chimaltenango Department</option>
                        <option value="Chiquimula Department">Chiquimula Department</option>
                        <option value="El Progreso Department">El Progreso Department</option>
                        <option value="Escuintla Department">Escuintla Department</option>
                        <option value="Guatemala Department">Guatemala Department</option>
                        <option value="Huehuetenango Department">Huehuetenango Department</option>
                        <option value="Izabal Department">Izabal Department</option>
                        <option value="Jalapa Department">Jalapa Department</option>
                        <option value="Jutiapa Department">Jutiapa Department</option>
                        <option value="Petén Department">Petén Department</option>
                        <option value="Quetzaltenango Department">Quetzaltenango Department</option>
                        <option value="Quiché Department">Quiché Department</option>
                        <option value="Retalhuleu Department">Retalhuleu Department</option>
                        <option value="Sacatepéquez Department">Sacatepéquez Department</option>
                        <option value="San Marcos Department">San Marcos Department</option>
                        <option value="Santa Rosa Department">Santa Rosa Department</option>
                        <option value="Sololá Department">Sololá Department</option>
                        <option value="Suchitepéquez Department">Suchitepéquez Department</option>
                        <option value="Totonicapán Department">Totonicapán Department</option>
                    </>
                )
            case "Guernsey":
                return (
                    <>
                        <option value="Guernsey">Guernsey</option>
                    </>
                )
            case "Guinea":
                return (
                    <>
                        <option value="Beyla Prefecture">Beyla Prefecture</option>
                        <option value="Boffa Prefecture">Boffa Prefecture</option>
                        <option value="Boké Prefecture">Boké Prefecture</option>
                        <option value="Boké Region">Boké Region</option>
                        <option value="Conakry">Conakry</option>
                        <option value="Coyah Prefecture">Coyah Prefecture</option>
                        <option value="Dabola Prefecture">Dabola Prefecture</option>
                        <option value="Dalaba Prefecture">Dalaba Prefecture</option>
                        <option value="Dinguiraye Prefecture">Dinguiraye Prefecture</option>
                        <option value="Dubréka Prefecture">Dubréka Prefecture</option>
                        <option value="Faranah Prefecture">Faranah Prefecture</option>
                        <option value="Forécariah Prefecture">Forécariah Prefecture</option>
                        <option value="Fria Prefecture">Fria Prefecture</option>
                        <option value="Gaoual Prefecture">Gaoual Prefecture</option>
                        <option value="Guéckédou Prefecture">Guéckédou Prefecture</option>
                        <option value="Kankan Prefecture">Kankan Prefecture</option>
                        <option value="Kankan Region">Kankan Region</option>
                        <option value="Kérouané Prefecture">Kérouané Prefecture</option>
                        <option value="Kindia Prefecture">Kindia Prefecture</option>
                        <option value="Kindia Region">Kindia Region</option>
                        <option value="Kissidougou Prefecture">Kissidougou Prefecture</option>
                        <option value="Koubia Prefecture">Koubia Prefecture</option>
                        <option value="Koundara Prefecture">Koundara Prefecture</option>
                        <option value="Kouroussa Prefecture">Kouroussa Prefecture</option>
                        <option value="Labé Prefecture">Labé Prefecture</option>
                        <option value="Labé Region">Labé Region</option>
                        <option value="Lélouma Prefecture">Lélouma Prefecture</option>
                        <option value="Lola Prefecture">Lola Prefecture</option>
                        <option value="Macenta Prefecture">Macenta Prefecture</option>
                        <option value="Mali Prefecture">Mali Prefecture</option>
                        <option value="Mamou Prefecture">Mamou Prefecture</option>
                        <option value="Mamou Region">Mamou Region</option>
                        <option value="Mandiana Prefecture">Mandiana Prefecture</option>
                        <option value="Nzérékoré Prefecture">Nzérékoré Prefecture</option>
                        <option value="Nzérékoré Region">Nzérékoré Region</option>
                        <option value="Pita Prefecture">Pita Prefecture</option>
                        <option value="Siguiri Prefecture">Siguiri Prefecture</option>
                        <option value="Télimélé Prefecture">Télimélé Prefecture</option>
                        <option value="Tougué Prefecture">Tougué Prefecture</option>
                        <option value="Yomou Prefecture">Yomou Prefecture</option>
                    </>
                )
            case "Guinea-Bissau":
                return (
                    <>
                        <option value="Bafatá">Bafatá</option>
                        <option value="Biombo Region">Biombo Region</option>
                        <option value="Bolama Region">Bolama Region</option>
                        <option value="Cacheu Region">Cacheu Region</option>
                        <option value="Gabú Region">Gabú Region</option>
                        <option value="Leste Province">Leste Province</option>
                        <option value="Norte Province">Norte Province</option>
                        <option value="Oio Region">Oio Region</option>
                        <option value="Quinara Region">Quinara Region</option>
                        <option value="Sul Province">Sul Province</option>
                        <option value="Tombali Region">Tombali Region</option>
                    </>
                )
            case "Guyana":
                return (
                    <>
                        <option value="Barima-Waini">Barima-Waini</option>
                        <option value="Cuyuni-Mazaruni">Cuyuni-Mazaruni</option>
                        <option value="Demerara-Mahaica">Demerara-Mahaica</option>
                        <option value="East Berbice-Corentyne">East Berbice-Corentyne</option>
                        <option value="Essequibo Islands-West Demerara">Essequibo Islands-West Demerara</option>
                        <option value="Mahaica-Berbice">Mahaica-Berbice</option>
                        <option value="Pomeroon-Supenaam">Pomeroon-Supenaam</option>
                        <option value="Potaro-Siparuni">Potaro-Siparuni</option>
                        <option value="Upper Demerara-Berbice">Upper Demerara-Berbice</option>
                        <option value="Upper Takutu-Upper Essequibo">Upper Takutu-Upper Essequibo</option>
                    </>
                )
            case "Haiti":
                return (
                    <>
                        <option value="Artibonite">Artibonite</option>
                        <option value="Centre">Centre</option>
                        <option value="Grand'Anse">Grand'Anse</option>
                        <option value="Nippes">Nippes</option>
                        <option value="Nord">Nord</option>
                        <option value="Nord-Est">Nord-Est</option>
                        <option value="Nord-Ouest">Nord-Ouest</option>
                        <option value="Ouest">Ouest</option>
                        <option value="Sud">Sud</option>
                        <option value="Sud-Est">Sud-Est</option>
                    </>
                )
            case "Hawaii":
                return (
                    <>
                        <option value="Hawaii">Hawaii</option>
                    </>
                )
            case "Honduras":
                return (
                    <>
                        <option value="Atlántida Department">Atlántida Department</option>
                        <option value="Bay Islands Department">Bay Islands Department</option>
                        <option value="Choluteca Department">Choluteca Department</option>
                        <option value="Colón Department">Colón Department</option>
                        <option value="Comayagua Department">Comayagua Department</option>
                        <option value="Copán Department">Copán Department</option>
                        <option value="Cortés Department">Cortés Department</option>
                        <option value="El Paraíso Department">El Paraíso Department</option>
                        <option value="Francisco Morazán Department">Francisco Morazán Department</option>
                        <option value="Gracias a Dios Department">Gracias a Dios Department</option>
                        <option value="Intibucá Department">Intibucá Department</option>
                        <option value="La Paz Department">La Paz Department</option>
                        <option value="Lempira Department">Lempira Department</option>
                        <option value="Ocotepeque Department">Ocotepeque Department</option>
                        <option value="Olancho Department">Olancho Department</option>
                        <option value="Santa Bárbara Department">Santa Bárbara Department</option>
                        <option value="Valle Department">Valle Department</option>
                        <option value="Yoro Department">Yoro Department</option>
                    </>
                )
            case "Hong Kong":
                return (
                    <>
                        <option value="Central and Western District">Central and Western District</option>
                        <option value="Eastern">Eastern</option>
                        <option value="Islands District">Islands District</option>
                        <option value="Kowloon City">Kowloon City</option>
                        <option value="Kwai Tsing">Kwai Tsing</option>
                        <option value="Kwun Tong">Kwun Tong</option>
                        <option value="North">North</option>
                        <option value="Sai Kung District">Sai Kung District</option>
                        <option value="Sha Tin">Sha Tin</option>
                        <option value="Sham Shui Po">Sham Shui Po</option>
                        <option value="Southern">Southern</option>
                        <option value="Tsuen Wan District">Tsuen Wan District</option>
                        <option value="Tuen Mun">Tuen Mun</option>
                        <option value="Wan Chai">Wan Chai</option>
                        <option value="Wong Tai Sin">Wong Tai Sin</option>
                        <option value="Yau Tsim Mong">Yau Tsim Mong</option>
                        <option value="Yuen Long District">Yuen Long District</option>
                    </>
                )
            case "Hungary":
                return (
                    <>
                        <option value="Bács-Kiskun County">Bács-Kiskun County</option>
                        <option value="Baranya County">Baranya County</option>
                        <option value="Békés County">Békés County</option>
                        <option value="Békéscsaba">Békéscsaba</option>
                        <option value="Borsod-Abaúj-Zemplén County">Borsod-Abaúj-Zemplén County</option>
                        <option value="Budapest">Budapest</option>
                        <option value="Csongrád County">Csongrád County</option>
                        <option value="Debrecen">Debrecen</option>
                        <option value="Dunaújváros">Dunaújváros</option>
                        <option value="Eger">Eger</option>
                        <option value="Érd">Érd</option>
                        <option value="Fejér County">Fejér County</option>
                        <option value="Győr">Győr</option>
                        <option value="Győr-Moson-Sopron County">Győr-Moson-Sopron County</option>
                        <option value="Hajdú-Bihar County">Hajdú-Bihar County</option>
                        <option value="Heves County">Heves County</option>
                        <option value="Hódmezővásárhely">Hódmezővásárhely</option>
                        <option value="Jász-Nagykun-Szolnok County">Jász-Nagykun-Szolnok County</option>
                        <option value="Kaposvár">Kaposvár</option>
                        <option value="Kecskemét">Kecskemét</option>
                        <option value="Miskolc">Miskolc</option>
                        <option value="Nagykanizsa">Nagykanizsa</option>
                        <option value="Nógrád County">Nógrád County</option>
                        <option value="Nyíregyháza">Nyíregyháza</option>
                        <option value="Pécs">Pécs</option>
                        <option value="Pest County">Pest County</option>
                        <option value="Salgótarján">Salgótarján</option>
                        <option value="Somogy County">Somogy County</option>
                        <option value="Sopron">Sopron</option>
                        <option value="Szabolcs-Szatmár-Bereg County">Szabolcs-Szatmár-Bereg County</option>
                        <option value="Szeged">Szeged</option>
                        <option value="Székesfehérvár">Székesfehérvár</option>
                        <option value="Szekszárd">Szekszárd</option>
                        <option value="Szolnok">Szolnok</option>
                        <option value="Szombathely">Szombathely</option>
                        <option value="Tatabánya">Tatabánya</option>
                        <option value="Tolna County">Tolna County</option>
                        <option value="Vas County">Vas County</option>
                        <option value="Veszprém">Veszprém</option>
                        <option value="Veszprém County">Veszprém County</option>
                        <option value="Zala County">Zala County</option>
                        <option value="Zalaegerszeg">Zalaegerszeg</option>
                    </>
                )
            case "Iceland":
                return (
                    <>
                        <option value="Capital Region">Capital Region</option>
                        <option value="Eastern Region">Eastern Region</option>
                        <option value="Northeastern Region">Northeastern Region</option>
                        <option value="Northwestern Region">Northwestern Region</option>
                        <option value="Southern Peninsula Region">Southern Peninsula Region</option>
                        <option value="Southern Region">Southern Region</option>
                        <option value="Western Region">Western Region</option>
                        <option value="Westfjords">Westfjords</option>
                    </>
                )
            case "India":
                return (
                    <>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </>
                )
            case "Indonesia":
                return (
                    <>
                        <option value="Aceh">Aceh</option>
                        <option value="Bali">Bali</option>
                        <option value="Bangka Belitung Islands">Bangka Belitung Islands</option>
                        <option value="Banten">Banten</option>
                        <option value="Bengkulu">Bengkulu</option>
                        <option value="Central Java">Central Java</option>
                        <option value="Central Kalimantan">Central Kalimantan</option>
                        <option value="Central Sulawesi">Central Sulawesi</option>
                        <option value="East Java">East Java</option>
                        <option value="East Kalimantan">East Kalimantan</option>
                        <option value="East Nusa Tenggara">East Nusa Tenggara</option>
                        <option value="Gorontalo">Gorontalo</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Jambi">Jambi</option>
                        <option value="Kalimantan">Kalimantan</option>
                        <option value="Lampung">Lampung</option>
                        <option value="Lesser Sunda Islands">Lesser Sunda Islands</option>
                        <option value="Maluku">Maluku</option>
                        <option value="Maluku Islands">Maluku Islands</option>
                        <option value="North Kalimantan">North Kalimantan</option>
                        <option value="North Maluku">North Maluku</option>
                        <option value="North Sulawesi">North Sulawesi</option>
                        <option value="North Sumatra">North Sumatra</option>
                        <option value="Papua">Papua</option>
                        <option value="Riau">Riau</option>
                        <option value="Riau Islands">Riau Islands</option>
                        <option value="South Kalimantan">South Kalimantan</option>
                        <option value="South Sulawesi">South Sulawesi</option>
                        <option value="South Sumatra">South Sumatra</option>
                        <option value="Southeast Sulawesi">Southeast Sulawesi</option>
                        <option value="Special Region of Yogyakarta">Special Region of Yogyakarta</option>
                        <option value="Sulawesi">Sulawesi</option>
                        <option value="Sumatra">Sumatra</option>
                        <option value="West Java">West Java</option>
                        <option value="West Nusa Tenggara">West Nusa Tenggara</option>
                        <option value="West Papua">West Papua</option>
                        <option value="West Sulawesi">West Sulawesi</option>
                        <option value="West Sumatra">West Sumatra</option>
                    </>
                )
            case "Iran":
                return (
                    <>
                        <option value="Alborz Province">Alborz Province</option>
                        <option value="Ardabil Province">Ardabil Province</option>
                        <option value="Bushehr Province">Bushehr Province</option>
                        <option value="Chaharmahal and Bakhtiari Province">Chaharmahal and Bakhtiari Province</option>
                        <option value="East Azerbaijan Province">East Azerbaijan Province</option>
                        <option value="Fars Province">Fars Province</option>
                        <option value="Gilan Province">Gilan Province</option>
                        <option value="Golestan Province">Golestan Province</option>
                        <option value="Hormozgan Province">Hormozgan Province</option>
                        <option value="Ilam Province">Ilam Province</option>
                        <option value="Isfahan Province">Isfahan Province</option>
                        <option value="Kerman Province">Kerman Province</option>
                        <option value="Kermanshah Province">Kermanshah Province</option>
                        <option value="Khuzestan Province">Khuzestan Province</option>
                        <option value="Kohgiluyeh and Boyer-Ahmad Province">Kohgiluyeh and Boyer-Ahmad Province</option>
                        <option value="Kurdistan Province">Kurdistan Province</option>
                        <option value="Lorestan Province">Lorestan Province</option>
                        <option value="Markazi Province">Markazi Province</option>
                        <option value="Mazandaran Province">Mazandaran Province</option>
                        <option value="North Khorasan Province">North Khorasan Province</option>
                        <option value="Qazvin Province">Qazvin Province</option>
                        <option value="Qom Province">Qom Province</option>
                        <option value="Razavi Khorasan Province">Razavi Khorasan Province</option>
                        <option value="Semnan Province">Semnan Province</option>
                        <option value="Sistan and Baluchestan">Sistan and Baluchestan</option>
                        <option value="South Khorasan Province">South Khorasan Province</option>
                        <option value="Tehran Province">Tehran Province</option>
                        <option value="West Azarbaijan Province">West Azarbaijan Province</option>
                        <option value="Yazd Province">Yazd Province</option>
                        <option value="Zanjan Province">Zanjan Province</option>
                    </>
                )
            case "Iraq":
                return (
                    <>
                        <option value="Al Anbar Governorate">Al Anbar Governorate</option>
                        <option value="Al Muthanna Governorate">Al Muthanna Governorate</option>
                        <option value="Al-Qādisiyyah Governorate">Al-Qādisiyyah Governorate</option>
                        <option value="Babylon Governorate">Babylon Governorate</option>
                        <option value="Baghdad Governorate">Baghdad Governorate</option>
                        <option value="Basra Governorate">Basra Governorate</option>
                        <option value="Dhi Qar Governorate">Dhi Qar Governorate</option>
                        <option value="Diyala Governorate">Diyala Governorate</option>
                        <option value="Dohuk Governorate">Dohuk Governorate</option>
                        <option value="Erbil Governorate">Erbil Governorate</option>
                        <option value="Karbala Governorate">Karbala Governorate</option>
                        <option value="Kirkuk Governorate">Kirkuk Governorate</option>
                        <option value="Maysan Governorate">Maysan Governorate</option>
                        <option value="Najaf Governorate">Najaf Governorate</option>
                        <option value="Nineveh Governorate">Nineveh Governorate</option>
                        <option value="Saladin Governorate">Saladin Governorate</option>
                        <option value="Sulaymaniyah Governorate">Sulaymaniyah Governorate</option>
                        <option value="Wasit Governorate">Wasit Governorate</option>
                    </>
                )
            case "Ireland":
                return (
                    <>
                        <option value="Connacht">Connacht</option>
                        <option value="County Carlow">County Carlow</option>
                        <option value="County Cavan">County Cavan</option>
                        <option value="County Clare">County Clare</option>
                        <option value="County Cork">County Cork</option>
                        <option value="County Donegal">County Donegal</option>
                        <option value="County Dublin">County Dublin</option>
                        <option value="County Galway">County Galway</option>
                        <option value="County Kerry">County Kerry</option>
                        <option value="County Kildare">County Kildare</option>
                        <option value="County Kilkenny">County Kilkenny</option>
                        <option value="County Laois">County Laois</option>
                        <option value="County Limerick">County Limerick</option>
                        <option value="County Longford">County Longford</option>
                        <option value="County Louth">County Louth</option>
                        <option value="County Mayo">County Mayo</option>
                        <option value="County Meath">County Meath</option>
                        <option value="County Monaghan">County Monaghan</option>
                        <option value="County Offaly">County Offaly</option>
                        <option value="County Roscommon">County Roscommon</option>
                        <option value="County Sligo">County Sligo</option>
                        <option value="County Tipperary">County Tipperary</option>
                        <option value="County Waterford">County Waterford</option>
                        <option value="County Westmeath">County Westmeath</option>
                        <option value="County Wexford">County Wexford</option>
                        <option value="County Wicklow">County Wicklow</option>
                        <option value="Leinster">Leinster</option>
                        <option value="Munster">Munster</option>
                        <option value="Ulster">Ulster</option>
                    </>
                )
            case "Isle of Man":
                return (
                    <>
                        <option value="Isle of Man">Isle of Man</option>
                    </>
                )
            case "Israel":
                return (
                    <>
                        <option value="Central District">Central District</option>
                        <option value="Haifa District">Haifa District</option>
                        <option value="Jerusalem District">Jerusalem District</option>
                        <option value="Northern District">Northern District</option>
                        <option value="Southern District">Southern District</option>
                        <option value="Tel Aviv District">Tel Aviv District</option>
                    </>
                )
            case "Italy":
                return (
                    <>
                        <option value="Abruzzo">Abruzzo</option>
                        <option value="Aosta Valley">Aosta Valley</option>
                        <option value="Apulia">Apulia</option>
                        <option value="Basilicata">Basilicata</option>
                        <option value="Benevento Province">Benevento Province</option>
                        <option value="Calabria">Calabria</option>
                        <option value="Campania">Campania</option>
                        <option value="Emilia-Romagna">Emilia-Romagna</option>
                        <option value="Friuli–Venezia Giulia">Friuli–Venezia Giulia</option>
                        <option value="Lazio">Lazio</option>
                        <option value="Libero consorzio comunale di Agrigento">Libero consorzio comunale di Agrigento</option>
                        <option value="Libero consorzio comunale di Caltanissetta">Libero consorzio comunale di Caltanissetta</option>
                        <option value="Libero consorzio comunale di Enna">Libero consorzio comunale di Enna</option>
                        <option value="Libero consorzio comunale di Ragusa">Libero consorzio comunale di Ragusa</option>
                        <option value="Libero consorzio comunale di Siracusa">Libero consorzio comunale di Siracusa</option>
                        <option value="Libero consorzio comunale di Trapani">Libero consorzio comunale di Trapani</option>
                        <option value="Liguria">Liguria</option>
                        <option value="Lombardy">Lombardy</option>
                        <option value="Marche">Marche</option>
                        <option value="Metropolitan City of Bari">Metropolitan City of Bari</option>
                        <option value="Metropolitan City of Bologna">Metropolitan City of Bologna</option>
                        <option value="Metropolitan City of Cagliari">Metropolitan City of Cagliari</option>
                        <option value="Metropolitan City of Catania">Metropolitan City of Catania</option>
                        <option value="Metropolitan City of Florence">Metropolitan City of Florence</option>
                        <option value="Metropolitan City of Genoa">Metropolitan City of Genoa</option>
                        <option value="Metropolitan City of Messina">Metropolitan City of Messina</option>
                        <option value="Metropolitan City of Milan">Metropolitan City of Milan</option>
                        <option value="Metropolitan City of Naples">Metropolitan City of Naples</option>
                        <option value="Metropolitan City of Palermo">Metropolitan City of Palermo</option>
                        <option value="Metropolitan City of Reggio Calabria">Metropolitan City of Reggio Calabria</option>
                        <option value="Metropolitan City of Rome">Metropolitan City of Rome</option>
                        <option value="Metropolitan City of Turin">Metropolitan City of Turin</option>
                        <option value="Metropolitan City of Venice">Metropolitan City of Venice</option>
                        <option value="Molise">Molise</option>
                        <option value="Pesaro and Urbino Province">Pesaro and Urbino Province</option>
                        <option value="Piedmont">Piedmont</option>
                        <option value="Province of Alessandria">Province of Alessandria</option>
                        <option value="Province of Ancona">Province of Ancona</option>
                        <option value="Province of Ascoli Piceno">Province of Ascoli Piceno</option>
                        <option value="Province of Asti">Province of Asti</option>
                        <option value="Province of Avellino">Province of Avellino</option>
                        <option value="Province of Barletta-Andria-Trani">Province of Barletta-Andria-Trani</option>
                        <option value="Province of Belluno">Province of Belluno</option>
                        <option value="Province of Bergamo">Province of Bergamo</option>
                        <option value="Province of Biella">Province of Biella</option>
                        <option value="Province of Brescia">Province of Brescia</option>
                        <option value="Province of Brindisi">Province of Brindisi</option>
                        <option value="Province of Campobasso">Province of Campobasso</option>
                        <option value="Province of Carbonia-Iglesias">Province of Carbonia-Iglesias</option>
                        <option value="Province of Caserta">Province of Caserta</option>
                        <option value="Province of Catanzaro">Province of Catanzaro</option>
                        <option value="Province of Chieti">Province of Chieti</option>
                        <option value="Province of Como">Province of Como</option>
                        <option value="Province of Cosenza">Province of Cosenza</option>
                        <option value="Province of Cremona">Province of Cremona</option>
                        <option value="Province of Crotone">Province of Crotone</option>
                        <option value="Province of Cuneo">Province of Cuneo</option>
                        <option value="Province of Fermo">Province of Fermo</option>
                        <option value="Province of Ferrara">Province of Ferrara</option>
                        <option value="Province of Foggia">Province of Foggia</option>
                        <option value="Province of Forlì-Cesena">Province of Forlì-Cesena</option>
                        <option value="Province of Frosinone">Province of Frosinone</option>
                        <option value="Province of Gorizia">Province of Gorizia</option>
                        <option value="Province of Grosseto">Province of Grosseto</option>
                        <option value="Province of Imperia">Province of Imperia</option>
                        <option value="Province of Isernia">Province of Isernia</option>
                        <option value="Province of L'Aquila">Province of L'Aquila</option>
                        <option value="Province of La Spezia">Province of La Spezia</option>
                        <option value="Province of Latina">Province of Latina</option>
                        <option value="Province of Lecce">Province of Lecce</option>
                        <option value="Province of Lecco">Province of Lecco</option>
                        <option value="Province of Livorno">Province of Livorno</option>
                        <option value="Province of Lodi">Province of Lodi</option>
                        <option value="Province of Lucca">Province of Lucca</option>
                        <option value="Province of Macerata">Province of Macerata</option>
                        <option value="Province of Mantua">Province of Mantua</option>
                        <option value="Province of Massa and Carrara">Province of Massa and Carrara</option>
                        <option value="Province of Matera">Province of Matera</option>
                        <option value="Province of Medio Campidano">Province of Medio Campidano</option>
                        <option value="Province of Modena">Province of Modena</option>
                        <option value="Province of Monza and Brianza">Province of Monza and Brianza</option>
                        <option value="Province of Novara">Province of Novara</option>
                        <option value="Province of Nuoro">Province of Nuoro</option>
                        <option value="Province of Ogliastra">Province of Ogliastra</option>
                        <option value="Province of Olbia-Tempio">Province of Olbia-Tempio</option>
                        <option value="Province of Oristano">Province of Oristano</option>
                        <option value="Province of Padua">Province of Padua</option>
                        <option value="Province of Parma">Province of Parma</option>
                        <option value="Province of Pavia">Province of Pavia</option>
                        <option value="Province of Perugia">Province of Perugia</option>
                        <option value="Province of Pescara">Province of Pescara</option>
                        <option value="Province of Piacenza">Province of Piacenza</option>
                        <option value="Province of Pisa">Province of Pisa</option>
                        <option value="Province of Pistoia">Province of Pistoia</option>
                        <option value="Province of Pordenone">Province of Pordenone</option>
                        <option value="Province of Potenza">Province of Potenza</option>
                        <option value="Province of Prato">Province of Prato</option>
                        <option value="Province of Ravenna">Province of Ravenna</option>
                        <option value="Province of Reggio Emilia">Province of Reggio Emilia</option>
                        <option value="Province of Rieti">Province of Rieti</option>
                        <option value="Province of Rimini">Province of Rimini</option>
                        <option value="Province of Rovigo">Province of Rovigo</option>
                        <option value="Province of Salerno">Province of Salerno</option>
                        <option value="Province of Sassari">Province of Sassari</option>
                        <option value="Province of Savona">Province of Savona</option>
                        <option value="Province of Siena">Province of Siena</option>
                        <option value="Province of Sondrio">Province of Sondrio</option>
                        <option value="Province of Taranto">Province of Taranto</option>
                        <option value="Province of Teramo">Province of Teramo</option>
                        <option value="Province of Terni">Province of Terni</option>
                        <option value="Province of Treviso">Province of Treviso</option>
                        <option value="Province of Trieste">Province of Trieste</option>
                        <option value="Province of Udine">Province of Udine</option>
                        <option value="Province of Varese">Province of Varese</option>
                        <option value="Province of Verbano-Cusio-Ossola">Province of Verbano-Cusio-Ossola</option>
                        <option value="Province of Vercelli">Province of Vercelli</option>
                        <option value="Province of Verona">Province of Verona</option>
                        <option value="Province of Vibo Valentia">Province of Vibo Valentia</option>
                        <option value="Province of Vicenza">Province of Vicenza</option>
                        <option value="Province of Viterbo">Province of Viterbo</option>
                        <option value="Sardinia">Sardinia</option>
                        <option value="Sicily">Sicily</option>
                        <option value="South Tyrol">South Tyrol</option>
                        <option value="Trentino">Trentino</option>
                        <option value="Trentino-South Tyrol">Trentino-South Tyrol</option>
                        <option value="Tuscany">Tuscany</option>
                        <option value="Umbria">Umbria</option>
                        <option value="Veneto">Veneto</option>
                    </>
                )
            case "Jamaica":
                return (
                    <>
                        <option value="Clarendon Parish">Clarendon Parish</option>
                        <option value="Hanover Parish">Hanover Parish</option>
                        <option value="Kingston Parish">Kingston Parish</option>
                        <option value="Manchester Parish">Manchester Parish</option>
                        <option value="Portland Parish">Portland Parish</option>
                        <option value="Saint Andrew">Saint Andrew</option>
                        <option value="Saint Ann Parish">Saint Ann Parish</option>
                        <option value="Saint Catherine Parish">Saint Catherine Parish</option>
                        <option value="Saint Elizabeth Parish">Saint Elizabeth Parish</option>
                        <option value="Saint James Parish">Saint James Parish</option>
                        <option value="Saint Mary Parish">Saint Mary Parish</option>
                        <option value="Saint Thomas Parish">Saint Thomas Parish</option>
                        <option value="Trelawny Parish">Trelawny Parish</option>
                        <option value="Westmoreland Parish">Westmoreland Parish</option>
                    </>
                )
            case "Japan":
                return (
                    <>
                        <option value="Aichi Prefecture">Aichi Prefecture</option>
                        <option value="Akita Prefecture">Akita Prefecture</option>
                        <option value="Aomori Prefecture">Aomori Prefecture</option>
                        <option value="Chiba Prefecture">Chiba Prefecture</option>
                        <option value="Ehime Prefecture">Ehime Prefecture</option>
                        <option value="Fukui Prefecture">Fukui Prefecture</option>
                        <option value="Fukuoka Prefecture">Fukuoka Prefecture</option>
                        <option value="Fukushima Prefecture">Fukushima Prefecture</option>
                        <option value="Gifu Prefecture">Gifu Prefecture</option>
                        <option value="Gunma Prefecture">Gunma Prefecture</option>
                        <option value="Hiroshima Prefecture">Hiroshima Prefecture</option>
                        <option value="Hokkaidō Prefecture">Hokkaidō Prefecture</option>
                        <option value="Hyōgo Prefecture">Hyōgo Prefecture</option>
                        <option value="Ibaraki Prefecture">Ibaraki Prefecture</option>
                        <option value="Ishikawa Prefecture">Ishikawa Prefecture</option>
                        <option value="Iwate Prefecture">Iwate Prefecture</option>
                        <option value="Kagawa Prefecture">Kagawa Prefecture</option>
                        <option value="Kagoshima Prefecture">Kagoshima Prefecture</option>
                        <option value="Kanagawa Prefecture">Kanagawa Prefecture</option>
                        <option value="Kumamoto Prefecture">Kumamoto Prefecture</option>
                        <option value="Kyōto Prefecture">Kyōto Prefecture</option>
                        <option value="Mie Prefecture">Mie Prefecture</option>
                        <option value="Miyagi Prefecture">Miyagi Prefecture</option>
                        <option value="Miyazaki Prefecture">Miyazaki Prefecture</option>
                        <option value="Nagano Prefecture">Nagano Prefecture</option>
                        <option value="Nagasaki Prefecture">Nagasaki Prefecture</option>
                        <option value="Nara Prefecture">Nara Prefecture</option>
                        <option value="Niigata Prefecture">Niigata Prefecture</option>
                        <option value="Ōita Prefecture">Ōita Prefecture</option>
                        <option value="Okayama Prefecture">Okayama Prefecture</option>
                        <option value="Okinawa Prefecture">Okinawa Prefecture</option>
                        <option value="Ōsaka Prefecture">Ōsaka Prefecture</option>
                        <option value="Saga Prefecture">Saga Prefecture</option>
                        <option value="Saitama Prefecture">Saitama Prefecture</option>
                        <option value="Shiga Prefecture">Shiga Prefecture</option>
                        <option value="Shimane Prefecture">Shimane Prefecture</option>
                        <option value="Shizuoka Prefecture">Shizuoka Prefecture</option>
                        <option value="Tochigi Prefecture">Tochigi Prefecture</option>
                        <option value="Tokushima Prefecture">Tokushima Prefecture</option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="Tottori Prefecture">Tottori Prefecture</option>
                        <option value="Toyama Prefecture">Toyama Prefecture</option>
                        <option value="Wakayama Prefecture">Wakayama Prefecture</option>
                        <option value="Yamagata Prefecture">Yamagata Prefecture</option>
                        <option value="Yamaguchi Prefecture">Yamaguchi Prefecture</option>
                        <option value="Yamanashi Prefecture">Yamanashi Prefecture</option>
                    </>
                )
            case "Jersey":
                return (
                    <>
                        <option value="Jersey">Jersey</option>
                    </>
                )
            case "Jordan":
                return (
                    <>
                        <option value="Ajloun Governorate">Ajloun Governorate</option>
                        <option value="Amman Governorate">Amman Governorate</option>
                        <option value="Aqaba Governorate">Aqaba Governorate</option>
                        <option value="Balqa Governorate">Balqa Governorate</option>
                        <option value="Irbid Governorate">Irbid Governorate</option>
                        <option value="Jerash Governorate">Jerash Governorate</option>
                        <option value="Karak Governorate">Karak Governorate</option>
                        <option value="Ma'an Governorate">Ma'an Governorate</option>
                        <option value="Madaba Governorate">Madaba Governorate</option>
                        <option value="Mafraq Governorate">Mafraq Governorate</option>
                        <option value="Tafilah Governorate">Tafilah Governorate</option>
                        <option value="Zarqa Governorate">Zarqa Governorate</option>
                    </>
                )
            case "Kazakhstan":
                return (
                    <>
                        <option value="Ajloun Governorate">Ajloun Governorate</option>
                        <option value="Amman Governorate">Amman Governorate</option>
                        <option value="Aqaba Governorate">Aqaba Governorate</option>
                        <option value="Balqa Governorate">Balqa Governorate</option>
                        <option value="Irbid Governorate">Irbid Governorate</option>
                        <option value="Jerash Governorate">Jerash Governorate</option>
                        <option value="Karak Governorate">Karak Governorate</option>
                        <option value="Ma'an Governorate">Ma'an Governorate</option>
                        <option value="Madaba Governorate">Madaba Governorate</option>
                        <option value="Mafraq Governorate">Mafraq Governorate</option>
                        <option value="Tafilah Governorate">Tafilah Governorate</option>
                        <option value="Zarqa Governorate">Zarqa Governorate</option>
                    </>
                )
            case "Kenya":
                return (
                    <>
                        <option value="Baringo County">Baringo County</option>
                        <option value="Bomet County">Bomet County</option>
                        <option value="Bungoma County">Bungoma County</option>
                        <option value="Busia County">Busia County</option>
                        <option value="Central Province">Central Province</option>
                        <option value="Coast Province">Coast Province</option>
                        <option value="Eastern Province">Eastern Province</option>
                        <option value="Elgeyo-Marakwet County">Elgeyo-Marakwet County</option>
                        <option value="Embu County">Embu County</option>
                        <option value="Garissa County">Garissa County</option>
                        <option value="Homa Bay County">Homa Bay County</option>
                        <option value="Isiolo County">Isiolo County</option>
                        <option value="Kajiado County">Kajiado County</option>
                        <option value="Kakamega County">Kakamega County</option>
                        <option value="Kericho County">Kericho County</option>
                        <option value="Kiambu County">Kiambu County</option>
                        <option value="Kilifi County">Kilifi County</option>
                        <option value="Kirinyaga County">Kirinyaga County</option>
                        <option value="Kisii County">Kisii County</option>
                        <option value="Kisumu County">Kisumu County</option>
                        <option value="Kitui County">Kitui County</option>
                        <option value="Kwale County">Kwale County</option>
                        <option value="Laikipia County">Laikipia County</option>
                        <option value="Lamu County">Lamu County</option>
                        <option value="Machakos County">Machakos County</option>
                        <option value="Makueni County">Makueni County</option>
                        <option value="Mandera County">Mandera County</option>
                        <option value="Marsabit County">Marsabit County</option>
                        <option value="Meru County">Meru County</option>
                        <option value="Migori County">Migori County</option>
                        <option value="Mombasa County">Mombasa County</option>
                        <option value="Muranga County">Muranga County</option>
                        <option value="Nairobi">Nairobi</option>
                        <option value="Nakuru District">Nakuru District</option>
                        <option value="Nandi District">Nandi District</option>
                        <option value="Narok County">Narok County</option>
                        <option value="North Eastern Province">North Eastern Province</option>
                        <option value="Nyamira District">Nyamira District</option>
                        <option value="Nyandarua County">Nyandarua County</option>
                        <option value="Nyanza Province">Nyanza Province</option>
                        <option value="Nyeri County">Nyeri County</option>
                        <option value="Rift Valley Province">Rift Valley Province</option>
                        <option value="Samburu County">Samburu County</option>
                        <option value="Siaya County">Siaya County</option>
                        <option value="Taita–Taveta County">Taita–Taveta County</option>
                        <option value="Tana River County">Tana River County</option>
                        <option value="Tharaka Nithi County">Tharaka Nithi County</option>
                        <option value="Trans-Nzoia District">Trans-Nzoia District</option>
                        <option value="Turkana County">Turkana County</option>
                        <option value="Uasin Gishu District">Uasin Gishu District</option>
                        <option value="Vihiga District">Vihiga District</option>
                        <option value="Wajir County">Wajir County</option>
                        <option value="West Pokot County">West Pokot County</option>
                        <option value="Western Province">Western Province</option>
                    </>
                )
            case "Kiribati":
                return (
                    <>
                        <option value="Gilbert Islands">Gilbert Islands</option>
                        <option value="Line Islands">Line Islands</option>
                        <option value="Phoenix Islands">Phoenix Islands</option>
                    </>
                )
            case "Korea North":
                return (
                    <>
                        <option value="Chagang Province">Chagang Province</option>
                        <option value="Kangwon Province">Kangwon Province</option>
                        <option value="North Hamgyong Province">North Hamgyong Province</option>
                        <option value="North Hwanghae Province">North Hwanghae Province</option>
                        <option value="North Pyongan Province">North Pyongan Province</option>
                        <option value="Pyongyang">Pyongyang</option>
                        <option value="Rason">Rason</option>
                        <option value="Ryanggang Province">Ryanggang Province</option>
                        <option value="South Hamgyong Province">South Hamgyong Province</option>
                        <option value="South Hwanghae Province">South Hwanghae Province</option>
                        <option value="South Pyongan Province">South Pyongan Province</option>
                    </>
                )
            case "Korea South":
                return (
                    <>
                        <option value="Busan">Busan</option>
                        <option value="Daegu">Daegu</option>
                        <option value="Daejeon">Daejeon</option>
                        <option value="Gangwon Province">Gangwon Province</option>
                        <option value="Gwangju">Gwangju</option>
                        <option value="Gyeonggi Province">Gyeonggi Province</option>
                        <option value="Incheon">Incheon</option>
                        <option value="Jeju">Jeju</option>
                        <option value="North Chungcheong Province">North Chungcheong Province</option>
                        <option value="North Gyeongsang Province">North Gyeongsang Province</option>
                        <option value="North Jeolla Province">North Jeolla Province</option>
                        <option value="Sejong City">Sejong City</option>
                        <option value="Seoul">Seoul</option>
                        <option value="South Chungcheong Province">South Chungcheong Province</option>
                        <option value="South Gyeongsang Province">South Gyeongsang Province</option>
                        <option value="South Jeolla Province">South Jeolla Province</option>
                        <option value="Ulsan">Ulsan</option>
                    </>
                )
            case "Kosovo":
                return (
                    <>
                        <option value="Đakovica District (Gjakove)">Đakovica District (Gjakove)</option>
                        <option value="Gjilan District">Gjilan District</option>
                        <option value="Kosovska Mitrovica District">Kosovska Mitrovica District</option>
                        <option value="Peć District">Peć District</option>
                        <option value="Pristina (Priştine)">Pristina (Priştine)</option>
                        <option value="Prizren District">Prizren District</option>
                        <option value="Uroševac District (Ferizaj)">Uroševac District (Ferizaj)</option>
                    </>
                )
            case "Kuwait":
                return (
                    <>
                        <option value="Al Ahmadi Governorate">Al Ahmadi Governorate</option>
                        <option value="Al Farwaniyah Governorate">Al Farwaniyah Governorate</option>
                        <option value="Al Jahra Governorate">Al Jahra Governorate</option>
                        <option value="Capital Governorate">Capital Governorate</option>
                        <option value="Hawalli Governorate">Hawalli Governorate</option>
                        <option value="Mubarak Al-Kabeer Governorate">Mubarak Al-Kabeer Governorate</option>
                    </>
                )
            case "Kyrgyzstan":
                return (
                    <>
                        <option value="Batken Region">Batken Region</option>
                        <option value="Bishkek">Bishkek</option>
                        <option value="Chuy Region">Chuy Region</option>
                        <option value="Issyk-Kul Region">Issyk-Kul Region</option>
                        <option value="Jalal-Abad Region">Jalal-Abad Region</option>
                        <option value="Naryn Region">Naryn Region</option>
                        <option value="Osh">Osh</option>
                        <option value="Osh Region">Osh Region</option>
                        <option value="Talas Region">Talas Region</option>
                    </>
                )
            case "Laos":
                return (
                    <>
                        <option value="Attapeu Province">Attapeu Province</option>
                        <option value="Bokeo Province">Bokeo Province</option>
                        <option value="Bolikhamsai Province">Bolikhamsai Province</option>
                        <option value="Champasak Province">Champasak Province</option>
                        <option value="Houaphanh Province">Houaphanh Province</option>
                        <option value="Khammouane Province">Khammouane Province</option>
                        <option value="Luang Namtha Province">Luang Namtha Province</option>
                        <option value="Luang Prabang Province">Luang Prabang Province</option>
                        <option value="Oudomxay Province">Oudomxay Province</option>
                        <option value="Phongsaly Province">Phongsaly Province</option>
                        <option value="Sainyabuli Province">Sainyabuli Province</option>
                        <option value="Salavan Province">Salavan Province</option>
                        <option value="Savannakhet Province">Savannakhet Province</option>
                        <option value="Sekong Province">Sekong Province</option>
                        <option value="Vientiane Prefecture">Vientiane Prefecture</option>
                        <option value="Vientiane Province">Vientiane Province</option>
                        <option value="Xaisomboun">Xaisomboun</option>
                        <option value="Xaisomboun Province">Xaisomboun Province</option>
                        <option value="Xiangkhouang Province">Xiangkhouang Province</option>
                    </>
                )
            case "Latvia":
                return (
                    <>
                        <option value="Aglona Municipality">Aglona Municipality</option>
                        <option value="Aizkraukle Municipality">Aizkraukle Municipality</option>
                        <option value="Aizpute Municipality">Aizpute Municipality</option>
                        <option value="Aknīste Municipality">Aknīste Municipality</option>
                        <option value="Aloja Municipality">Aloja Municipality</option>
                        <option value="Alsunga Municipality">Alsunga Municipality</option>
                        <option value="Alūksne Municipality">Alūksne Municipality</option>
                        <option value="Amata Municipality">Amata Municipality</option>
                        <option value="Ape Municipality">Ape Municipality</option>
                        <option value="Auce Municipality">Auce Municipality</option>
                        <option value="Babīte Municipality">Babīte Municipality</option>
                        <option value="Baldone Municipality">Baldone Municipality</option>
                        <option value="Baltinava Municipality">Baltinava Municipality</option>
                        <option value="Balvi Municipality">Balvi Municipality</option>
                        <option value="Bauska Municipality">Bauska Municipality</option>
                        <option value="Beverīna Municipality">Beverīna Municipality</option>
                        <option value="Brocēni Municipality">Brocēni Municipality</option>
                        <option value="Burtnieki Municipality">Burtnieki Municipality</option>
                        <option value="Carnikava Municipality">Carnikava Municipality</option>
                        <option value="Cēsis Municipality">Cēsis Municipality</option>
                        <option value="Cesvaine Municipality">Cesvaine Municipality</option>
                        <option value="Cibla Municipality">Cibla Municipality</option>
                        <option value="Dagda Municipality">Dagda Municipality</option>
                        <option value="Daugavpils">Daugavpils</option>
                        <option value="Daugavpils Municipality">Daugavpils Municipality</option>
                        <option value="Dobele Municipality">Dobele Municipality</option>
                        <option value="Dundaga Municipality">Dundaga Municipality</option>
                        <option value="Durbe Municipality">Durbe Municipality</option>
                        <option value="Engure Municipality">Engure Municipality</option>
                        <option value="Ērgļi Municipality">Ērgļi Municipality</option>
                        <option value="Garkalne Municipality">Garkalne Municipality</option>
                        <option value="Grobiņa Municipality">Grobiņa Municipality</option>
                        <option value="Gulbene Municipality">Gulbene Municipality</option>
                        <option value="Iecava Municipality">Iecava Municipality</option>
                        <option value="Ikšķile Municipality">Ikšķile Municipality</option>
                        <option value="Ilūkste Municipality">Ilūkste Municipality</option>
                        <option value="Inčukalns Municipality">Inčukalns Municipality</option>
                        <option value="Jaunjelgava Municipality">Jaunjelgava Municipality</option>
                        <option value="Jaunpiebalga Municipality">Jaunpiebalga Municipality</option>
                        <option value="Jaunpils Municipality">Jaunpils Municipality</option>
                        <option value="Jēkabpils">Jēkabpils</option>
                        <option value="Jēkabpils Municipality">Jēkabpils Municipality</option>
                        <option value="Jelgava">Jelgava</option>
                        <option value="Jelgava Municipality">Jelgava Municipality</option>
                        <option value="Jūrmala">Jūrmala</option>
                        <option value="Kandava Municipality">Kandava Municipality</option>
                        <option value="Kārsava Municipality">Kārsava Municipality</option>
                        <option value="Ķegums Municipality">Ķegums Municipality</option>
                        <option value="Ķekava Municipality">Ķekava Municipality</option>
                        <option value="Kocēni Municipality">Kocēni Municipality</option>
                        <option value="Koknese Municipality">Koknese Municipality</option>
                        <option value="Krāslava Municipality">Krāslava Municipality</option>
                        <option value="Krimulda Municipality">Krimulda Municipality</option>
                        <option value="Krustpils Municipality">Krustpils Municipality</option>
                        <option value="Kuldīga Municipality">Kuldīga Municipality</option>
                        <option value="Lielvārde Municipality">Lielvārde Municipality</option>
                        <option value="Liepāja">Liepāja</option>
                        <option value="Līgatne Municipality">Līgatne Municipality</option>
                        <option value="Limbaži Municipality">Limbaži Municipality</option>
                        <option value="Līvāni Municipality">Līvāni Municipality</option>
                        <option value="Lubāna Municipality">Lubāna Municipality</option>
                        <option value="Ludza Municipality">Ludza Municipality</option>
                        <option value="Madona Municipality">Madona Municipality</option>
                        <option value="Mālpils Municipality">Mālpils Municipality</option>
                        <option value="Mārupe Municipality">Mārupe Municipality</option>
                        <option value="Mazsalaca Municipality">Mazsalaca Municipality</option>
                        <option value="Mērsrags Municipality">Mērsrags Municipality</option>
                        <option value="Naukšēni Municipality">Naukšēni Municipality</option>
                        <option value="Nereta Municipality">Nereta Municipality</option>
                        <option value="Nīca Municipality">Nīca Municipality</option>
                        <option value="Ogre Municipality">Ogre Municipality</option>
                        <option value="Olaine Municipality">Olaine Municipality</option>
                        <option value="Ozolnieki Municipality">Ozolnieki Municipality</option>
                        <option value="Pārgauja Municipality">Pārgauja Municipality</option>
                        <option value="Pāvilosta Municipality">Pāvilosta Municipality</option>
                        <option value="Pļaviņas Municipality">Pļaviņas Municipality</option>
                        <option value="Preiļi Municipality">Preiļi Municipality</option>
                        <option value="Priekule Municipality">Priekule Municipality</option>
                        <option value="Priekuļi Municipality">Priekuļi Municipality</option>
                        <option value="Rauna Municipality">Rauna Municipality</option>
                        <option value="Rēzekne">Rēzekne</option>
                        <option value="Rēzekne Municipality">Rēzekne Municipality</option>
                        <option value="Riebiņi Municipality">Riebiņi Municipality</option>
                        <option value="Riga">Riga</option>
                        <option value="Roja Municipality">Roja Municipality</option>
                        <option value="Ropaži Municipality">Ropaži Municipality</option>
                        <option value="Rucava Municipality">Rucava Municipality</option>
                        <option value="Rugāji Municipality">Rugāji Municipality</option>
                        <option value="Rūjiena Municipality">Rūjiena Municipality</option>
                        <option value="Rundāle Municipality">Rundāle Municipality</option>
                        <option value="Sala Municipality">Sala Municipality</option>
                        <option value="Salacgrīva Municipality">Salacgrīva Municipality</option>
                        <option value="Salaspils Municipality">Salaspils Municipality</option>
                        <option value="Saldus Municipality">Saldus Municipality</option>
                        <option value="Saulkrasti Municipality">Saulkrasti Municipality</option>
                        <option value="Sēja Municipality">Sēja Municipality</option>
                        <option value="Sigulda Municipality">Sigulda Municipality</option>
                        <option value="Skrīveri Municipality">Skrīveri Municipality</option>
                        <option value="Skrunda Municipality">Skrunda Municipality</option>
                        <option value="Smiltene Municipality">Smiltene Municipality</option>
                        <option value="Stopiņi Municipality">Stopiņi Municipality</option>
                        <option value="Strenči Municipality">Strenči Municipality</option>
                        <option value="Talsi Municipality">Talsi Municipality</option>
                        <option value="Tērvete Municipality">Tērvete Municipality</option>
                        <option value="Tukums Municipality">Tukums Municipality</option>
                        <option value="Vaiņode Municipality">Vaiņode Municipality</option>
                        <option value="Valka Municipality">Valka Municipality</option>
                        <option value="Valmiera">Valmiera</option>
                        <option value="Varakļāni Municipality">Varakļāni Municipality</option>
                        <option value="Vārkava Municipality">Vārkava Municipality</option>
                        <option value="Vecpiebalga Municipality">Vecpiebalga Municipality</option>
                        <option value="Vecumnieki Municipality">Vecumnieki Municipality</option>
                        <option value="Ventspils">Ventspils</option>
                        <option value="Ventspils Municipality">Ventspils Municipality</option>
                        <option value="Viesīte Municipality">Viesīte Municipality</option>
                        <option value="Viļaka Municipality">Viļaka Municipality</option>
                        <option value="Viļāni Municipality">Viļāni Municipality</option>
                        <option value="Zilupe Municipality">Zilupe Municipality</option>
                    </>
                )
            case "Lebanon":
                return (
                    <>
                        <option value="Akkar Governorate">Akkar Governorate</option>
                        <option value="Baalbek-Hermel Governorate">Baalbek-Hermel Governorate</option>
                        <option value="Beirut Governorate">Beirut Governorate</option>
                        <option value="Beqaa Governorate">Beqaa Governorate</option>
                        <option value="Mount Lebanon Governorate">Mount Lebanon Governorate</option>
                        <option value="Nabatieh Governorate">Nabatieh Governorate</option>
                        <option value="North Governorate">North Governorate</option>
                        <option value="South Governorate">South Governorate</option>
                    </>
                )
            case "Lesotho":
                return (
                    <>
                        <option value="Berea District">Berea District</option>
                        <option value="Butha-Buthe District">Butha-Buthe District</option>
                        <option value="Leribe District">Leribe District</option>
                        <option value="Mafeteng District">Mafeteng District</option>
                        <option value="Maseru District">Maseru District</option>
                        <option value="Mohale's Hoek District">Mohale's Hoek District</option>
                        <option value="Mokhotlong District">Mokhotlong District</option>
                        <option value="Qacha's Nek District">Qacha's Nek District</option>
                        <option value="Quthing District">Quthing District</option>
                        <option value="Thaba-Tseka District">Thaba-Tseka District</option>
                    </>
                )
            case "Liberia":
                return (
                    <>
                        <option value="Bomi County">Bomi County</option>
                        <option value="Bong County">Bong County</option>
                        <option value="Gbarpolu County">Gbarpolu County</option>
                        <option value="Grand Bassa County">Grand Bassa County</option>
                        <option value="Grand Cape Mount County">Grand Cape Mount County</option>
                        <option value="Grand Gedeh County">Grand Gedeh County</option>
                        <option value="Grand Kru County">Grand Kru County</option>
                        <option value="Lofa County">Lofa County</option>
                        <option value="Margibi County">Margibi County</option>
                        <option value="Maryland County">Maryland County</option>
                        <option value="Montserrado County">Montserrado County</option>
                        <option value="Nimba">Nimba</option>
                        <option value="River Cess County">River Cess County</option>
                        <option value="River Gee County">River Gee County</option>
                        <option value="Sinoe County">Sinoe County</option>
                    </>
                )
            case "Libya":
                return (
                    <>
                        <option value="Al Wahat District">Al Wahat District</option>
                        <option value="Benghazi">Benghazi</option>
                        <option value="Derna District">Derna District</option>
                        <option value="Ghat District">Ghat District</option>
                        <option value="Jabal al Akhdar">Jabal al Akhdar</option>
                        <option value="Jabal al Gharbi District">Jabal al Gharbi District</option>
                        <option value="Jafara">Jafara</option>
                        <option value="Jufra">Jufra</option>
                        <option value="Kufra District">Kufra District</option>
                        <option value="Marj District">Marj District</option>
                        <option value="Misrata District">Misrata District</option>
                        <option value="Murqub">Murqub</option>
                        <option value="Murzuq District">Murzuq District</option>
                        <option value="Nalut District">Nalut District</option>
                        <option value="Nuqat al Khams">Nuqat al Khams</option>
                        <option value="Sabha District">Sabha District</option>
                        <option value="Sirte District">Sirte District</option>
                        <option value="Tripoli District">Tripoli District</option>
                        <option value="Wadi al Hayaa District">Wadi al Hayaa District</option>
                        <option value="Wadi al Shatii District">Wadi al Shatii District</option>
                        <option value="Zawiya District">Zawiya District</option>
                    </>
                )
            case "Liechtenstein":
                return (
                    <>
                        <option value="Balzers">Balzers</option>
                        <option value="Eschen">Eschen</option>
                        <option value="Gamprin">Gamprin</option>
                        <option value="Mauren">Mauren</option>
                        <option value="Planken">Planken</option>
                        <option value="Ruggell">Ruggell</option>
                        <option value="Schaan">Schaan</option>
                        <option value="Schellenberg">Schellenberg</option>
                        <option value="Triesen">Triesen</option>
                        <option value="Triesenberg">Triesenberg</option>
                        <option value="Vaduz">Vaduz</option>
                    </>
                )
            case "Lithuania":
                return (
                    <>
                        <option value="Akmenė District Municipality">Akmenė District Municipality</option>
                        <option value="Alytus City Municipality">Alytus City Municipality</option>
                        <option value="Alytus County">Alytus County</option>
                        <option value="Alytus District Municipality">Alytus District Municipality</option>
                        <option value="Birštonas Municipality">Birštonas Municipality</option>
                        <option value="Biržai District Municipality">Biržai District Municipality</option>
                        <option value="Druskininkai municipality">Druskininkai municipality</option>
                        <option value="Elektrėnai municipality">Elektrėnai municipality</option>
                        <option value="Ignalina District Municipality">Ignalina District Municipality</option>
                        <option value="Jonava District Municipality">Jonava District Municipality</option>
                        <option value="Joniškis District Municipality">Joniškis District Municipality</option>
                        <option value="Jurbarkas District Municipality">Jurbarkas District Municipality</option>
                        <option value="Kaišiadorys District Municipality">Kaišiadorys District Municipality</option>
                        <option value="Kalvarija municipality">Kalvarija municipality</option>
                        <option value="Kaunas City Municipality">Kaunas City Municipality</option>
                        <option value="Kaunas County">Kaunas County</option>
                        <option value="Kaunas District Municipality">Kaunas District Municipality</option>
                        <option value="Kazlų Rūda municipality">Kazlų Rūda municipality</option>
                        <option value="Kėdainiai District Municipality">Kėdainiai District Municipality</option>
                        <option value="Kelmė District Municipality">Kelmė District Municipality</option>
                        <option value="Klaipeda City Municipality">Klaipeda City Municipality</option>
                        <option value="Klaipėda County">Klaipėda County</option>
                        <option value="Klaipėda District Municipality">Klaipėda District Municipality</option>
                        <option value="Kretinga District Municipality">Kretinga District Municipality</option>
                        <option value="Kupiškis District Municipality">Kupiškis District Municipality</option>
                        <option value="Lazdijai District Municipality">Lazdijai District Municipality</option>
                        <option value="Marijampolė County">Marijampolė County</option>
                        <option value="Marijampolė Municipality">Marijampolė Municipality</option>
                        <option value="Mažeikiai District Municipality">Mažeikiai District Municipality</option>
                        <option value="Molėtai District Municipality">Molėtai District Municipality</option>
                        <option value="Neringa Municipality">Neringa Municipality</option>
                        <option value="Pagėgiai municipality">Pagėgiai municipality</option>
                        <option value="Pakruojis District Municipality">Pakruojis District Municipality</option>
                        <option value="Palanga City Municipality">Palanga City Municipality</option>
                        <option value="Panevėžys City Municipality">Panevėžys City Municipality</option>
                        <option value="Panevėžys County">Panevėžys County</option>
                        <option value="Panevėžys District Municipality">Panevėžys District Municipality</option>
                        <option value="Pasvalys District Municipality">Pasvalys District Municipality</option>
                        <option value="Plungė District Municipality">Plungė District Municipality</option>
                        <option value="Prienai District Municipality">Prienai District Municipality</option>
                        <option value="Radviliškis District Municipality">Radviliškis District Municipality</option>
                        <option value="Raseiniai District Municipality">Raseiniai District Municipality</option>
                        <option value="Rietavas municipality">Rietavas municipality</option>
                        <option value="Rokiškis District Municipality">Rokiškis District Municipality</option>
                        <option value="Šakiai District Municipality">Šakiai District Municipality</option>
                        <option value="Šalčininkai District Municipality">Šalčininkai District Municipality</option>
                        <option value="Šiauliai City Municipality">Šiauliai City Municipality</option>
                        <option value="Šiauliai County">Šiauliai County</option>
                        <option value="Šiauliai District Municipality">Šiauliai District Municipality</option>
                        <option value="Šilalė District Municipality">Šilalė District Municipality</option>
                        <option value="Šilutė District Municipality">Šilutė District Municipality</option>
                        <option value="Širvintos District Municipality">Širvintos District Municipality</option>
                        <option value="Skuodas District Municipality">Skuodas District Municipality</option>
                        <option value="Švenčionys District Municipality">Švenčionys District Municipality</option>
                        <option value="Tauragė County">Tauragė County</option>
                        <option value="Tauragė District Municipality">Tauragė District Municipality</option>
                        <option value="Telšiai County">Telšiai County</option>
                        <option value="Telšiai District Municipality">Telšiai District Municipality</option>
                        <option value="Trakai District Municipality">Trakai District Municipality</option>
                        <option value="Ukmergė District Municipality">Ukmergė District Municipality</option>
                        <option value="Utena County">Utena County</option>
                        <option value="Utena District Municipality">Utena District Municipality</option>
                        <option value="Varėna District Municipality">Varėna District Municipality</option>
                        <option value="Vilkaviškis District Municipality">Vilkaviškis District Municipality</option>
                        <option value="Vilnius City Municipality">Vilnius City Municipality</option>
                        <option value="Vilnius County">Vilnius County</option>
                        <option value="Vilnius District Municipality">Vilnius District Municipality</option>
                        <option value="Visaginas Municipality">Visaginas Municipality</option>
                        <option value="Zarasai District Municipality">Zarasai District Municipality</option>
                    </>
                )
            case "Luxembourg":
                return (
                    <>
                        <option value="Canton of Capellen">Canton of Capellen</option>
                        <option value="Canton of Clervaux">Canton of Clervaux</option>
                        <option value="Canton of Diekirch">Canton of Diekirch</option>
                        <option value="Canton of Echternach">Canton of Echternach</option>
                        <option value="Canton of Esch-sur-Alzette">Canton of Esch-sur-Alzette</option>
                        <option value="Canton of Grevenmacher">Canton of Grevenmacher</option>
                        <option value="Canton of Luxembourg">Canton of Luxembourg</option>
                        <option value="Canton of Mersch">Canton of Mersch</option>
                        <option value="Canton of Redange">Canton of Redange</option>
                        <option value="Canton of Remich">Canton of Remich</option>
                        <option value="Canton of Vianden">Canton of Vianden</option>
                        <option value="Canton of Wiltz">Canton of Wiltz</option>
                        <option value="Diekirch District">Diekirch District</option>
                        <option value="Grevenmacher District">Grevenmacher District</option>
                        <option value="Luxembourg District">Luxembourg District</option>
                    </>
                )
            case "Macao":
                return (
                    <>
                        <option value="Macao">Macao</option>
                    </>
                )
            case "Macedonia":
                return (
                    <>
                        <option value="Aerodrom Municipality">Aerodrom Municipality</option>
                        <option value="Aračinovo Municipality">Aračinovo Municipality</option>
                        <option value="Berovo Municipality">Berovo Municipality</option>
                        <option value="Bitola Municipality">Bitola Municipality</option>
                        <option value="Bogdanci Municipality">Bogdanci Municipality</option>
                        <option value="Bogovinje Municipality">Bogovinje Municipality</option>
                        <option value="Bosilovo Municipality">Bosilovo Municipality</option>
                        <option value="Brvenica Municipality">Brvenica Municipality</option>
                        <option value="Butel Municipality">Butel Municipality</option>
                        <option value="Čair Municipality">Čair Municipality</option>
                        <option value="Čaška Municipality">Čaška Municipality</option>
                        <option value="Centar Municipality">Centar Municipality</option>
                        <option value="Centar Župa Municipality">Centar Župa Municipality</option>
                        <option value="Češinovo-Obleševo Municipality">Češinovo-Obleševo Municipality</option>
                        <option value="Čučer-Sandevo Municipality">Čučer-Sandevo Municipality</option>
                        <option value="Debarca Municipality">Debarca Municipality</option>
                        <option value="Delčevo Municipality">Delčevo Municipality</option>
                        <option value="Demir Hisar Municipality">Demir Hisar Municipality</option>
                        <option value="Demir Kapija Municipality">Demir Kapija Municipality</option>
                        <option value="Dojran Municipality">Dojran Municipality</option>
                        <option value="Dolneni Municipality">Dolneni Municipality</option>
                        <option value="Drugovo Municipality">Drugovo Municipality</option>
                        <option value="Gazi Baba Municipality">Gazi Baba Municipality</option>
                        <option value="Gevgelija Municipality">Gevgelija Municipality</option>
                        <option value="Gjorče Petrov Municipality">Gjorče Petrov Municipality</option>
                        <option value="Gostivar Municipality">Gostivar Municipality</option>
                        <option value="Gradsko Municipality">Gradsko Municipality</option>
                        <option value="Greater Skopje">Greater Skopje</option>
                        <option value="Ilinden Municipality">Ilinden Municipality</option>
                        <option value="Jegunovce Municipality">Jegunovce Municipality</option>
                        <option value="Karbinci">Karbinci</option>
                        <option value="Karpoš Municipality">Karpoš Municipality</option>
                        <option value="Kavadarci Municipality">Kavadarci Municipality</option>
                        <option value="Kičevo Municipality">Kičevo Municipality</option>
                        <option value="Kisela Voda Municipality">Kisela Voda Municipality</option>
                        <option value="Kočani Municipality">Kočani Municipality</option>
                        <option value="Konče Municipality">Konče Municipality</option>
                        <option value="Kratovo Municipality">Kratovo Municipality</option>
                        <option value="Kriva Palanka Municipality">Kriva Palanka Municipality</option>
                        <option value="Krivogaštani Municipality">Krivogaštani Municipality</option>
                        <option value="Kruševo Municipality">Kruševo Municipality</option>
                        <option value="Kumanovo Municipality">Kumanovo Municipality</option>
                        <option value="Lipkovo Municipality">Lipkovo Municipality</option>
                        <option value="Lozovo Municipality">Lozovo Municipality</option>
                        <option value="Makedonska Kamenica Municipality">Makedonska Kamenica Municipality</option>
                        <option value="Makedonski Brod Municipality">Makedonski Brod Municipality</option>
                        <option value="Mavrovo and Rostuša Municipality">Mavrovo and Rostuša Municipality</option>
                        <option value="Mogila Municipality">Mogila Municipality</option>
                        <option value="Negotino Municipality">Negotino Municipality</option>
                        <option value="Novaci Municipality">Novaci Municipality</option>
                        <option value="Novo Selo Municipality">Novo Selo Municipality</option>
                        <option value="Ohrid Municipality">Ohrid Municipality</option>
                        <option value="Oslomej Municipality">Oslomej Municipality</option>
                        <option value="Pehčevo Municipality">Pehčevo Municipality</option>
                        <option value="Petrovec Municipality">Petrovec Municipality</option>
                        <option value="Plasnica Municipality">Plasnica Municipality</option>
                        <option value="Prilep Municipality">Prilep Municipality</option>
                        <option value="Probištip Municipality">Probištip Municipality</option>
                        <option value="Radoviš Municipality">Radoviš Municipality</option>
                        <option value="Rankovce Municipality">Rankovce Municipality</option>
                        <option value="Resen Municipality">Resen Municipality</option>
                        <option value="Rosoman Municipality">Rosoman Municipality</option>
                        <option value="Saraj Municipality">Saraj Municipality</option>
                        <option value="Sopište Municipality">Sopište Municipality</option>
                        <option value="Staro Nagoričane Municipality">Staro Nagoričane Municipality</option>
                        <option value="Štip Municipality">Štip Municipality</option>
                        <option value="Struga Municipality">Struga Municipality</option>
                        <option value="Strumica Municipality">Strumica Municipality</option>
                        <option value="Studeničani Municipality">Studeničani Municipality</option>
                        <option value="Šuto Orizari Municipality">Šuto Orizari Municipality</option>
                        <option value="Sveti Nikole Municipality">Sveti Nikole Municipality</option>
                        <option value="Tearce Municipality">Tearce Municipality</option>
                        <option value="Tetovo Municipality">Tetovo Municipality</option>
                        <option value="Valandovo Municipality">Valandovo Municipality</option>
                        <option value="Vasilevo Municipality">Vasilevo Municipality</option>
                        <option value="Veles Municipality">Veles Municipality</option>
                        <option value="Vevčani Municipality">Vevčani Municipality</option>
                        <option value="Vinica Municipality">Vinica Municipality</option>
                        <option value="Vraneštica Municipality">Vraneštica Municipality</option>
                        <option value="Vrapčište Municipality">Vrapčište Municipality</option>
                        <option value="Zajas Municipality">Zajas Municipality</option>
                        <option value="Zelenikovo Municipality">Zelenikovo Municipality</option>
                        <option value="Želino Municipality">Želino Municipality</option>
                        <option value="Zrnovci Municipality">Zrnovci Municipality</option>
                    </>
                )
            case "Madagascar":
                return (
                    <>
                        <option value="Antananarivo Province">Antananarivo Province</option>
                        <option value="Antsiranana Province">Antsiranana Province</option>
                        <option value="Fianarantsoa Province">Fianarantsoa Province</option>
                        <option value="Mahajanga Province">Mahajanga Province</option>
                        <option value="Toamasina Province">Toamasina Province</option>
                        <option value="Toliara Province">Toliara Province</option>
                    </>
                )
            case "Malawi":
                return (
                    <>
                        <option value="Balaka District">Balaka District</option>
                        <option value="Blantyre District">Blantyre District</option>
                        <option value="Central Region">Central Region</option>
                        <option value="Chikwawa District">Chikwawa District</option>
                        <option value="Chiradzulu District">Chiradzulu District</option>
                        <option value="Chitipa district">Chitipa district</option>
                        <option value="Dedza District">Dedza District</option>
                        <option value="Dowa District">Dowa District</option>
                        <option value="Karonga District">Karonga District</option>
                        <option value="Kasungu District">Kasungu District</option>
                        <option value="Likoma District">Likoma District</option>
                        <option value="Lilongwe District">Lilongwe District</option>
                        <option value="Machinga District">Machinga District</option>
                        <option value="Mangochi District">Mangochi District</option>
                        <option value="Mchinji District">Mchinji District</option>
                        <option value="Mulanje District">Mulanje District</option>
                        <option value="Mwanza District">Mwanza District</option>
                        <option value="Mzimba District">Mzimba District</option>
                        <option value="Nkhata Bay District">Nkhata Bay District</option>
                        <option value="Nkhotakota District">Nkhotakota District</option>
                        <option value="Northern Region">Northern Region</option>
                        <option value="Nsanje District">Nsanje District</option>
                        <option value="Ntcheu District">Ntcheu District</option>
                        <option value="Ntchisi District">Ntchisi District</option>
                        <option value="Phalombe District">Phalombe District</option>
                        <option value="Rumphi District">Rumphi District</option>
                        <option value="Salima District">Salima District</option>
                        <option value="Southern Region">Southern Region</option>
                        <option value="Thyolo District">Thyolo District</option>
                        <option value="Zomba District">Zomba District</option>
                    </>
                )
            case "Malaysia":
                return (
                    <>
                        <option value="Johor">Johor</option>
                        <option value="Kedah">Kedah</option>
                        <option value="Kelantan">Kelantan</option>
                        <option value="Kuala Lumpur">Kuala Lumpur</option>
                        <option value="Labuan">Labuan</option>
                        <option value="Melaka">Melaka</option>
                        <option value="Negeri Sembilan">Negeri Sembilan</option>
                        <option value="Pahang">Pahang</option>
                        <option value="Penang">Penang</option>
                        <option value="Perak">Perak</option>
                        <option value="Perlis">Perlis</option>
                        <option value="Putrajaya">Putrajaya</option>
                        <option value="Sabah">Sabah</option>
                        <option value="Sarawak">Sarawak</option>
                        <option value="Selangor">Selangor</option>
                        <option value="Terengganu">Terengganu</option>
                    </>
                )
            case "Maldives":
                return (
                    <>
                        <option value="Addu Atoll">Addu Atoll</option>
                        <option value="Alif Alif Atoll">Alif Alif Atoll</option>
                        <option value="Alif Dhaal Atoll">Alif Dhaal Atoll</option>
                        <option value="Central Province">Central Province</option>
                        <option value="Dhaalu Atoll">Dhaalu Atoll</option>
                        <option value="Faafu Atoll">Faafu Atoll</option>
                        <option value="Gaafu Alif Atoll">Gaafu Alif Atoll</option>
                        <option value="Gaafu Dhaalu Atoll">Gaafu Dhaalu Atoll</option>
                        <option value="Gnaviyani Atoll">Gnaviyani Atoll</option>
                        <option value="Haa Alif Atoll">Haa Alif Atoll</option>
                        <option value="Haa Dhaalu Atoll">Haa Dhaalu Atoll</option>
                        <option value="Kaafu Atoll">Kaafu Atoll</option>
                        <option value="Laamu Atoll">Laamu Atoll</option>
                        <option value="Lhaviyani Atoll">Lhaviyani Atoll</option>
                        <option value="Malé">Malé</option>
                        <option value="Meemu Atoll">Meemu Atoll</option>
                        <option value="Noonu Atoll">Noonu Atoll</option>
                        <option value="North Central Province">North Central Province</option>
                        <option value="North Province">North Province</option>
                        <option value="Raa Atoll">Raa Atoll</option>
                        <option value="Shaviyani Atoll">Shaviyani Atoll</option>
                        <option value="South Central Province">South Central Province</option>
                        <option value="South Province">South Province</option>
                        <option value="Thaa Atoll">Thaa Atoll</option>
                        <option value="Upper South Province">Upper South Province</option>
                        <option value="Vaavu Atoll">Vaavu Atoll</option>
                    </>
                )
            case "Mali":
                return (
                    <>
                        <option value="Bamako">Bamako</option>
                        <option value="Gao Region">Gao Region</option>
                        <option value="Kayes Region">Kayes Region</option>
                        <option value="Kidal Region">Kidal Region</option>
                        <option value="Koulikoro Region">Koulikoro Region</option>
                        <option value="Ménaka Region">Ménaka Region</option>
                        <option value="Mopti Region">Mopti Region</option>
                        <option value="Ségou Region">Ségou Region</option>
                        <option value="Sikasso Region">Sikasso Region</option>
                        <option value="Taoudénit Region">Taoudénit Region</option>
                        <option value="Tombouctou Region">Tombouctou Region</option>
                    </>
                )
            case "Malta":
                return (
                    <>
                        <option value="Attard">Attard</option>
                        <option value="Balzan">Balzan</option>
                        <option value="Birgu">Birgu</option>
                        <option value="Birkirkara">Birkirkara</option>
                        <option value="Birżebbuġa">Birżebbuġa</option>
                        <option value="Cospicua">Cospicua</option>
                        <option value="Dingli">Dingli</option>
                        <option value="Fgura">Fgura</option>
                        <option value="Floriana">Floriana</option>
                        <option value="Fontana">Fontana</option>
                        <option value="Għajnsielem">Għajnsielem</option>
                        <option value="Għarb">Għarb</option>
                        <option value="Għargħur">Għargħur</option>
                        <option value="Għasri">Għasri</option>
                        <option value="Għaxaq">Għaxaq</option>
                        <option value="Gudja">Gudja</option>
                        <option value="Gżira">Gżira</option>
                        <option value="Ħamrun">Ħamrun</option>
                        <option value="Iklin">Iklin</option>
                        <option value="Kalkara">Kalkara</option>
                        <option value="Kerċem">Kerċem</option>
                        <option value="Kirkop">Kirkop</option>
                        <option value="Lija">Lija</option>
                        <option value="Luqa">Luqa</option>
                        <option value="Marsa">Marsa</option>
                        <option value="Marsaskala">Marsaskala</option>
                        <option value="Marsaxlokk">Marsaxlokk</option>
                        <option value="Mdina">Mdina</option>
                        <option value="Mellieħa">Mellieħa</option>
                        <option value="Mġarr">Mġarr</option>
                        <option value="Mosta">Mosta</option>
                        <option value="Mqabba">Mqabba</option>
                        <option value="Msida">Msida</option>
                        <option value="Mtarfa">Mtarfa</option>
                        <option value="Munxar">Munxar</option>
                        <option value="Nadur">Nadur</option>
                        <option value="Naxxar">Naxxar</option>
                        <option value="Paola">Paola</option>
                        <option value="Pembroke">Pembroke</option>
                        <option value="Pietà">Pietà</option>
                        <option value="Qala">Qala</option>
                        <option value="Qormi">Qormi</option>
                        <option value="Qrendi">Qrendi</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Saint Lawrence">Saint Lawrence</option>
                        <option value="San Ġwann">San Ġwann</option>
                        <option value="Sannat">Sannat</option>
                        <option value="Santa Luċija">Santa Luċija</option>
                        <option value="Santa Venera">Santa Venera</option>
                        <option value="Senglea">Senglea</option>
                        <option value="Siġġiewi">Siġġiewi</option>
                        <option value="Sliema">Sliema</option>
                        <option value="St. Julian's">St. Julian's</option>
                        <option value="St. Paul's Bay">St. Paul's Bay</option>
                        <option value="Swieqi">Swieqi</option>
                        <option value="Ta' Xbiex">Ta' Xbiex</option>
                        <option value="Tarxien">Tarxien</option>
                        <option value="Valletta">Valletta</option>
                        <option value="Victoria">Victoria</option>
                        <option value="Xagħra">Xagħra</option>
                        <option value="Xewkija">Xewkija</option>
                        <option value="Xgħajra">Xgħajra</option>
                        <option value="Żabbar">Żabbar</option>
                        <option value="Żebbuġ Gozo">Żebbuġ Gozo</option>
                        <option value="Żebbuġ Malta">Żebbuġ Malta</option>
                        <option value="Żejtun">Żejtun</option>
                        <option value="Żurrieq">Żurrieq</option>
                    </>
                )
            case "Marshall Islands":
                return (
                    <>
                        <option value="Ralik Chain">Ralik Chain</option>
                        <option value="Ratak Chain">Ratak Chain</option>
                    </>
                )
            case "Martinique":
                return (
                    <>
                        <option value="Martinique">Martinique</option>
                    </>
                )
            case "Mauritania":
                return (
                    <>
                        <option value="Adrar Region">Adrar Region</option>
                        <option value="Assaba Region">Assaba Region</option>
                        <option value="Brakna Region">Brakna Region</option>
                        <option value="Dakhlet Nouadhibou">Dakhlet Nouadhibou</option>
                        <option value="Gorgol Region">Gorgol Region</option>
                        <option value="Guidimaka Region">Guidimaka Region</option>
                        <option value="Hodh Ech Chargui Region">Hodh Ech Chargui Region</option>
                        <option value="Hodh El Gharbi Region">Hodh El Gharbi Region</option>
                        <option value="Inchiri Region">Inchiri Region</option>
                        <option value="Nouakchott-Nord Region">Nouakchott-Nord Region</option>
                        <option value="Nouakchott-Ouest Region">Nouakchott-Ouest Region</option>
                        <option value="Nouakchott-Sud Region">Nouakchott-Sud Region</option>
                        <option value="Tagant Region">Tagant Region</option>
                        <option value="Tiris Zemmour Region">Tiris Zemmour Region</option>
                        <option value="Trarza Region">Trarza Region</option>
                    </>
                )
            case "Mauritius":
                return (
                    <>
                        <option value="Agaléga">Agaléga</option>
                        <option value="Beau Bassin-Rose Hill">Beau Bassin-Rose Hill</option>
                        <option value="Cargados Carajos">Cargados Carajos</option>
                        <option value="Curepipe">Curepipe</option>
                        <option value="Flacq District">Flacq District</option>
                        <option value="Grand Port District">Grand Port District</option>
                        <option value="Moka District">Moka District</option>
                        <option value="Pamplemousses District">Pamplemousses District</option>
                        <option value="Plaines Wilhems District">Plaines Wilhems District</option>
                        <option value="Port Louis">Port Louis</option>
                        <option value="Port Louis District">Port Louis District</option>
                        <option value="Quatre Bornes">Quatre Bornes</option>
                        <option value="Rivière du Rempart District">Rivière du Rempart District</option>
                        <option value="Rivière Noire District">Rivière Noire District</option>
                        <option value="Rodrigues">Rodrigues</option>
                        <option value="Savanne District">Savanne District</option>
                        <option value="Vacoas-Phoenix">Vacoas-Phoenix</option>
                    </>
                )
            case "Mayotte":
                return (
                    <>
                        <option value="Mayotte">Mayotte</option>
                    </>
                )
            case "Mexico":
                return (
                    <>
                        <option value="Aguascalientes">Aguascalientes</option>
                        <option value="Baja California">Baja California</option>
                        <option value="Baja California Sur">Baja California Sur</option>
                        <option value="Campeche">Campeche</option>
                        <option value="Chiapas">Chiapas</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Coahuila">Coahuila</option>
                        <option value="Colima">Colima</option>
                        <option value="Durango">Durango</option>
                        <option value="Guanajuato">Guanajuato</option>
                        <option value="Guerrero">Guerrero</option>
                        <option value="Hidalgo">Hidalgo</option>
                        <option value="Jalisco">Jalisco</option>
                        <option value="México">México</option>
                        <option value="Mexico City">Mexico City</option>
                        <option value="Michoacán">Michoacán</option>
                        <option value="Morelos">Morelos</option>
                        <option value="Nayarit">Nayarit</option>
                        <option value="Nuevo León">Nuevo León</option>
                        <option value="Oaxaca">Oaxaca</option>
                        <option value="Puebla">Puebla</option>
                        <option value="Querétaro">Querétaro</option>
                        <option value="Quintana Roo">Quintana Roo</option>
                        <option value="San Luis Potosí">San Luis Potosí</option>
                        <option value="Sinaloa">Sinaloa</option>
                        <option value="Sonora">Sonora</option>
                        <option value="Tabasco">Tabasco</option>
                        <option value="Tamaulipas">Tamaulipas</option>
                        <option value="Tlaxcala">Tlaxcala</option>
                        <option value="Veracruz">Veracruz</option>
                        <option value="Yucatán">Yucatán</option>
                        <option value="Zacatecas">Zacatecas</option>
                    </>
                )
            case "Micronesia":
                return (
                    <>
                        <option value="Chuuk State">Chuuk State</option>
                        <option value="Kosrae State">Kosrae State</option>
                        <option value="Pohnpei State">Pohnpei State</option>
                        <option value="Yap State">Yap State</option>
                    </>
                )
            case "Midway Islands":
                return (
                    <>
                        <option value="Midway Islands">Midway Islands</option>
                    </>
                )
            case "Moldova":
                return (
                    <>
                        <option value="Anenii Noi District">Anenii Noi District</option>
                        <option value="Bălți Municipality">Bălți Municipality</option>
                        <option value="Basarabeasca District">Basarabeasca District</option>
                        <option value="Bender Municipality">Bender Municipality</option>
                        <option value="Briceni District">Briceni District</option>
                        <option value="Cahul District">Cahul District</option>
                        <option value="Călărași District">Călărași District</option>
                        <option value="Cantemir District">Cantemir District</option>
                        <option value="Căușeni District">Căușeni District</option>
                        <option value="Chișinău Municipality">Chișinău Municipality</option>
                        <option value="Cimișlia District">Cimișlia District</option>
                        <option value="Criuleni District">Criuleni District</option>
                        <option value="Dondușeni District">Dondușeni District</option>
                        <option value="Drochia District">Drochia District</option>
                        <option value="Dubăsari District">Dubăsari District</option>
                        <option value="Edineț District">Edineț District</option>
                        <option value="Fălești District">Fălești District</option>
                        <option value="Florești District">Florești District</option>
                        <option value="Gagauzia">Gagauzia</option>
                        <option value="Glodeni District">Glodeni District</option>
                        <option value="Hîncești District">Hîncești District</option>
                        <option value="Ialoveni District">Ialoveni District</option>
                        <option value="Nisporeni District">Nisporeni District</option>
                        <option value="Ocnița District">Ocnița District</option>
                        <option value="Orhei District">Orhei District</option>
                        <option value="Rezina District">Rezina District</option>
                        <option value="Rîșcani District">Rîșcani District</option>
                        <option value="Sîngerei District">Sîngerei District</option>
                        <option value="Șoldănești District">Șoldănești District</option>
                        <option value="Soroca District">Soroca District</option>
                        <option value="Ștefan Vodă District">Ștefan Vodă District</option>
                        <option value="Strășeni District">Strășeni District</option>
                        <option value="Taraclia District">Taraclia District</option>
                        <option value="Telenești District">Telenești District</option>
                        <option value="Transnistria autonomous territorial unit">Transnistria autonomous territorial unit</option>
                        <option value="Ungheni District">Ungheni District</option>
                    </>
                )
            case "Monaco":
                return (
                    <>
                        <option value="Monaco">Monaco</option>
                    </>
                )
            case "Mongolia":
                return (
                    <>
                        <option value="Arkhangai Province">Arkhangai Province</option>
                        <option value="Bayan-Ölgii Province">Bayan-Ölgii Province</option>
                        <option value="Bayankhongor Province">Bayankhongor Province</option>
                        <option value="Bulgan Province">Bulgan Province</option>
                        <option value="Darkhan-Uul Province">Darkhan-Uul Province</option>
                        <option value="Dornod Province">Dornod Province</option>
                        <option value="Dornogovi Province">Dornogovi Province</option>
                        <option value="Dundgovi Province">Dundgovi Province</option>
                        <option value="Govi-Altai Province">Govi-Altai Province</option>
                        <option value="Govisümber Province">Govisümber Province</option>
                        <option value="Khentii Province">Khentii Province</option>
                        <option value="Khovd Province">Khovd Province</option>
                        <option value="Khövsgöl Province">Khövsgöl Province</option>
                        <option value="Ömnögovi Province">Ömnögovi Province</option>
                        <option value="Orkhon Province">Orkhon Province</option>
                        <option value="Övörkhangai Province">Övörkhangai Province</option>
                        <option value="Selenge Province">Selenge Province</option>
                        <option value="Sükhbaatar Province">Sükhbaatar Province</option>
                        <option value="Töv Province">Töv Province</option>
                        <option value="Uvs Province">Uvs Province</option>
                        <option value="Zavkhan Province">Zavkhan Province</option>
                    </>
                )
            case "Montenegro":
                return (
                    <>
                        <option value="Andrijevica Municipality">Andrijevica Municipality</option>
                        <option value="Bar Municipality">Bar Municipality</option>
                        <option value="Berane Municipality">Berane Municipality</option>
                        <option value="Bijelo Polje Municipality">Bijelo Polje Municipality</option>
                        <option value="Budva Municipality">Budva Municipality</option>
                        <option value="Danilovgrad Municipality">Danilovgrad Municipality</option>
                        <option value="Gusinje Municipality">Gusinje Municipality</option>
                        <option value="Kolašin Municipality">Kolašin Municipality</option>
                        <option value="Kotor Municipality">Kotor Municipality</option>
                        <option value="Mojkovac Municipality">Mojkovac Municipality</option>
                        <option value="Nikšić Municipality">Nikšić Municipality</option>
                        <option value="Old Royal Capital Cetinje">Old Royal Capital Cetinje</option>
                        <option value="Petnjica Municipality">Petnjica Municipality</option>
                        <option value="Plav Municipality">Plav Municipality</option>
                        <option value="Pljevlja Municipality">Pljevlja Municipality</option>
                        <option value="Plužine Municipality">Plužine Municipality</option>
                        <option value="Podgorica Municipality">Podgorica Municipality</option>
                        <option value="Rožaje Municipality">Rožaje Municipality</option>
                        <option value="Šavnik Municipality">Šavnik Municipality</option>
                        <option value="Tivat Municipality">Tivat Municipality</option>
                        <option value="Ulcinj Municipality">Ulcinj Municipality</option>
                        <option value="Žabljak Municipality">Žabljak Municipality</option>
                    </>
                )
            case "Montserrat":
                return (
                    <>
                        <option value="Montserrat">Montserrat</option>
                    </>
                )
            case "Morocco":
                return (
                    <>
                        <option value="Al Haouz Province">Al Haouz Province</option>
                        <option value="Al Hoceïma Province">Al Hoceïma Province</option>
                        <option value="Aousserd Province">Aousserd Province</option>
                        <option value="Assa-Zag Province">Assa-Zag Province</option>
                        <option value="Azilal Province">Azilal Province</option>
                        <option value="Ben Slimane Province">Ben Slimane Province</option>
                        <option value="Béni Mellal-Khénifra">Béni Mellal-Khénifra</option>
                        <option value="Béni-Mellal Province">Béni-Mellal Province</option>
                        <option value="Berkane Province">Berkane Province</option>
                        <option value="Boujdour Province">Boujdour Province</option>
                        <option value="Boulemane Province">Boulemane Province</option>
                        <option value="Casablanca-Settat">Casablanca-Settat</option>
                        <option value="Chefchaouen Province">Chefchaouen Province</option>
                        <option value="Chichaoua Province">Chichaoua Province</option>
                        <option value="Dakhla-Oued Ed-Dahab">Dakhla-Oued Ed-Dahab</option>
                        <option value="Drâa-Tafilalet">Drâa-Tafilalet</option>
                        <option value="El Hajeb Province">El Hajeb Province</option>
                        <option value="El Jadida Province">El Jadida Province</option>
                        <option value="Errachidia Province">Errachidia Province</option>
                        <option value="Es Semara Province">Es Semara Province</option>
                        <option value="Essaouira Province">Essaouira Province</option>
                        <option value="Fahs Anjra Province">Fahs Anjra Province</option>
                        <option value="Fès-Meknès">Fès-Meknès</option>
                        <option value="Figuig Province">Figuig Province</option>
                        <option value="Guelmim Province">Guelmim Province</option>
                        <option value="Guelmim-Oued Noun">Guelmim-Oued Noun</option>
                        <option value="Ifrane Province">Ifrane Province</option>
                        <option value="Inezgane-Aït Melloul Prefecture">Inezgane-Aït Melloul Prefecture</option>
                        <option value="Jerada Province">Jerada Province</option>
                        <option value="Kelaat Sraghna Province">Kelaat Sraghna Province</option>
                        <option value="Kénitra Province">Kénitra Province</option>
                        <option value="Khémisset Province">Khémisset Province</option>
                        <option value="Khénifra Province">Khénifra Province</option>
                        <option value="Khouribga Province">Khouribga Province</option>
                        <option value="Laâyoune Province">Laâyoune Province</option>
                        <option value="Laâyoune-Sakia El Hamra">Laâyoune-Sakia El Hamra</option>
                        <option value="Larache Province">Larache Province</option>
                        <option value="Marrakesh-Safi">Marrakesh-Safi</option>
                        <option value="Mediouna Province">Mediouna Province</option>
                        <option value="Moulay Yacoub Province">Moulay Yacoub Province</option>
                        <option value="Nador Province">Nador Province</option>
                        <option value="Nouaceur Province">Nouaceur Province</option>
                        <option value="Oriental">Oriental</option>
                        <option value="Ouarzazate Province">Ouarzazate Province</option>
                        <option value="Oued Ed-Dahab Province">Oued Ed-Dahab Province</option>
                        <option value="Safi Province">Safi Province</option>
                        <option value="Sefrou Province">Sefrou Province</option>
                        <option value="Settat Province">Settat Province</option>
                        <option value="Shtouka Ait Baha Province">Shtouka Ait Baha Province</option>
                        <option value="Sidi Kacem Province">Sidi Kacem Province</option>
                        <option value="Sidi Youssef Ben Ali">Sidi Youssef Ben Ali</option>
                        <option value="Souss-Massa">Souss-Massa</option>
                        <option value="Tan-Tan Province">Tan-Tan Province</option>
                        <option value="Tanger-Tétouan-Al Hoceïma">Tanger-Tétouan-Al Hoceïma</option>
                        <option value="Taounate Province">Taounate Province</option>
                        <option value="Taourirt Province">Taourirt Province</option>
                        <option value="Taroudant Province">Taroudant Province</option>
                        <option value="Tata Province">Tata Province</option>
                        <option value="Taza Province">Taza Province</option>
                        <option value="Tétouan Province">Tétouan Province</option>
                        <option value="Tiznit Province">Tiznit Province</option>
                        <option value="Zagora Province">Zagora Province</option>
                    </>
                )
            case "Mozambique":
                return (
                    <>
                        <option value="Cabo Delgado Province">Cabo Delgado Province</option>
                        <option value="Gaza Province">Gaza Province</option>
                        <option value="Inhambane Province">Inhambane Province</option>
                        <option value="Manica Province">Manica Province</option>
                        <option value="Maputo">Maputo</option>
                        <option value="Maputo Province">Maputo Province</option>
                        <option value="Nampula Province">Nampula Province</option>
                        <option value="Niassa Province">Niassa Province</option>
                        <option value="Sofala Province">Sofala Province</option>
                        <option value="Tete Province">Tete Province</option>
                        <option value="Zambezia Province">Zambezia Province</option>
                    </>
                )
            case "Myanmar":
                return (
                    <>
                        <option value="Ayeyarwady Region">Ayeyarwady Region</option>
                        <option value="Bago">Bago</option>
                        <option value="Chin State">Chin State</option>
                        <option value="Kachin State">Kachin State</option>
                        <option value="Kayah State">Kayah State</option>
                        <option value="Kayin State">Kayin State</option>
                        <option value="Magway Region">Magway Region</option>
                        <option value="Mandalay Region">Mandalay Region</option>
                        <option value="Mon State">Mon State</option>
                        <option value="Naypyidaw Union Territory">Naypyidaw Union Territory</option>
                        <option value="Rakhine State">Rakhine State</option>
                        <option value="Sagaing Region">Sagaing Region</option>
                        <option value="Shan State">Shan State</option>
                        <option value="Tanintharyi Region">Tanintharyi Region</option>
                        <option value="Yangon Region">Yangon Region</option>
                    </>
                )
            case "Namibia":
                return (
                    <>
                        <option value="Erongo Region">Erongo Region</option>
                        <option value="Hardap Region">Hardap Region</option>
                        <option value="Karas Region">Karas Region</option>
                        <option value="Kavango East Region">Kavango East Region</option>
                        <option value="Kavango West Region">Kavango West Region</option>
                        <option value="Khomas Region">Khomas Region</option>
                        <option value="Kunene Region">Kunene Region</option>
                        <option value="Ohangwena Region">Ohangwena Region</option>
                        <option value="Omaheke Region">Omaheke Region</option>
                        <option value="Omusati Region">Omusati Region</option>
                        <option value="Oshana Region">Oshana Region</option>
                        <option value="Oshikoto Region">Oshikoto Region</option>
                        <option value="Otjozondjupa Region">Otjozondjupa Region</option>
                        <option value="Zambezi Region">Zambezi Region</option>
                    </>
                )
            case "Nauru":
                return (
                    <>
                        <option value="Aiwo District">Aiwo District</option>
                        <option value="Anabar District">Anabar District</option>
                        <option value="Anetan District">Anetan District</option>
                        <option value="Anibare District">Anibare District</option>
                        <option value="Baiti District">Baiti District</option>
                        <option value="Boe District">Boe District</option>
                        <option value="Buada District">Buada District</option>
                        <option value="Denigomodu District">Denigomodu District</option>
                        <option value="Ewa District">Ewa District</option>
                        <option value="Ijuw District">Ijuw District</option>
                        <option value="Meneng District">Meneng District</option>
                        <option value="Nibok District">Nibok District</option>
                        <option value="Uaboe District">Uaboe District</option>
                        <option value="Yaren District">Yaren District</option>
                    </>
                )
            case "Nepal":
                return (
                    <>
                        <option value="Bagmati Zone">Bagmati Zone</option>
                        <option value="Bheri Zone">Bheri Zone</option>
                        <option value="Central Region">Central Region</option>
                        <option value="Dhaulagiri Zone">Dhaulagiri Zone</option>
                        <option value="Eastern Development Region">Eastern Development Region</option>
                        <option value="Far-Western Development Region">Far-Western Development Region</option>
                        <option value="Gandaki Zone">Gandaki Zone</option>
                        <option value="Janakpur Zone">Janakpur Zone</option>
                        <option value="Karnali Zone">Karnali Zone</option>
                        <option value="Kosi Zone">Kosi Zone</option>
                        <option value="Lumbini Zone">Lumbini Zone</option>
                        <option value="Mahakali Zone">Mahakali Zone</option>
                        <option value="Mechi Zone">Mechi Zone</option>
                        <option value="Mid-Western Region">Mid-Western Region</option>
                        <option value="Narayani Zone">Narayani Zone</option>
                        <option value="Rapti Zone">Rapti Zone</option>
                        <option value="Sagarmatha Zone">Sagarmatha Zone</option>
                        <option value="Seti Zone">Seti Zone</option>
                        <option value="Western Region">Western Region</option>
                    </>
                )
            case "Netherland Antilles":
                return (
                    <>
                        <option value="Netherland Antilles">Netherland Antilles</option>
                    </>
                )
            case "Netherlands":
                return (
                    <>
                        <option value="Bonaire">Bonaire</option>
                        <option value="Drenthe">Drenthe</option>
                        <option value="Flevoland">Flevoland</option>
                        <option value="Friesland">Friesland</option>
                        <option value="Gelderland">Gelderland</option>
                        <option value="Groningen">Groningen</option>
                        <option value="Limburg">Limburg</option>
                        <option value="North Brabant">North Brabant</option>
                        <option value="North Holland">North Holland</option>
                        <option value="Overijssel">Overijssel</option>
                        <option value="Saba">Saba</option>
                        <option value="Sint Eustatius">Sint Eustatius</option>
                        <option value="South Holland">South Holland</option>
                        <option value="Utrecht">Utrecht</option>
                        <option value="Zeeland">Zeeland</option>
                    </>
                )
            case "Nevis":
                return (
                    <>
                        <option value="Nevis">Nevis</option>
                    </>
                )
            case "New Caledonia":
                return (
                    <>
                        <option value="New Caledonia">New Caledonia</option>
                    </>
                )
            case "New Zealand":
                return (
                    <>
                        <option value="Auckland Region">Auckland Region</option>
                        <option value="Bay of Plenty Region">Bay of Plenty Region</option>
                        <option value="Canterbury Region">Canterbury Region</option>
                        <option value="Chatham Islands">Chatham Islands</option>
                        <option value="Gisborne District">Gisborne District</option>
                        <option value="Hawke's Bay Region">Hawke's Bay Region</option>
                        <option value="Manawatu-Wanganui Region">Manawatu-Wanganui Region</option>
                        <option value="Marlborough Region">Marlborough Region</option>
                        <option value="Nelson Region">Nelson Region</option>
                        <option value="Northland Region">Northland Region</option>
                        <option value="Otago Region">Otago Region</option>
                        <option value="Southland Region">Southland Region</option>
                        <option value="Taranaki Region">Taranaki Region</option>
                        <option value="Tasman District">Tasman District</option>
                        <option value="Waikato Region">Waikato Region</option>
                        <option value="Wellington Region">Wellington Region</option>
                        <option value="West Coast Region">West Coast Region</option>
                    </>
                )
            case "Nicaragua":
                return (
                    <>
                        <option value="Boaco Department">Boaco Department</option>
                        <option value="Carazo Department">Carazo Department</option>
                        <option value="Chinandega Department">Chinandega Department</option>
                        <option value="Chontales Department">Chontales Department</option>
                        <option value="Estelí Department">Estelí Department</option>
                        <option value="Granada Department">Granada Department</option>
                        <option value="Jinotega Department">Jinotega Department</option>
                        <option value="León Department">León Department</option>
                        <option value="Madriz Department">Madriz Department</option>
                        <option value="Managua Department">Managua Department</option>
                        <option value="Masaya Department">Masaya Department</option>
                        <option value="Matagalpa Department">Matagalpa Department</option>
                        <option value="North Caribbean Coast Autonomous Region">North Caribbean Coast Autonomous Region</option>
                        <option value="Río San Juan Department">Río San Juan Department</option>
                        <option value="Rivas Department">Rivas Department</option>
                        <option value="South Caribbean Coast Autonomous Region">South Caribbean Coast Autonomous Region</option>
                    </>
                )
            case "Niger":
                return (
                    <>
                        <option value="Agadez Region">Agadez Region</option>
                        <option value="Diffa Region">Diffa Region</option>
                        <option value="Dosso Region">Dosso Region</option>
                        <option value="Maradi Region">Maradi Region</option>
                        <option value="Tahoua Region">Tahoua Region</option>
                        <option value="Tillabéri Region">Tillabéri Region</option>
                        <option value="Zinder Region">Zinder Region</option>
                    </>
                )
            case "Nigeria":
                return (
                    <>
                        <option value="Abia State">Abia State</option>
                        <option value="Adamawa State">Adamawa State</option>
                        <option value="Akwa Ibom State">Akwa Ibom State</option>
                        <option value="Anambra State">Anambra State</option>
                        <option value="Bauchi State">Bauchi State</option>
                        <option value="Bayelsa State">Bayelsa State</option>
                        <option value="Benue State">Benue State</option>
                        <option value="Borno State">Borno State</option>
                        <option value="Cross River State">Cross River State</option>
                        <option value="Delta State">Delta State</option>
                        <option value="Ebonyi State">Ebonyi State</option>
                        <option value="Edo State">Edo State</option>
                        <option value="Ekiti State">Ekiti State</option>
                        <option value="Enugu State">Enugu State</option>
                        <option value="Federal Capital Territory">Federal Capital Territory</option>
                        <option value="Gombe State">Gombe State</option>
                        <option value="Imo State">Imo State</option>
                        <option value="Jigawa State">Jigawa State</option>
                        <option value="Kaduna State">Kaduna State</option>
                        <option value="Kano State">Kano State</option>
                        <option value="Katsina State">Katsina State</option>
                        <option value="Kebbi State">Kebbi State</option>
                        <option value="Kogi State">Kogi State</option>
                        <option value="Kwara State">Kwara State</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa State">Nasarawa State</option>
                        <option value="Niger State">Niger State</option>
                        <option value="Ogun State">Ogun State</option>
                        <option value="Ondo State">Ondo State</option>
                        <option value="Osun State">Osun State</option>
                        <option value="Oyo State">Oyo State</option>
                        <option value="Plateau State">Plateau State</option>
                        <option value="Sokoto State">Sokoto State</option>
                        <option value="Taraba State">Taraba State</option>
                        <option value="Yobe State">Yobe State</option>
                        <option value="Zamfara State">Zamfara State</option>
                    </>
                )
            case "Niue":
                return (
                    <>
                        <option value="Niue">Niue</option>
                    </>
                )
            case "Norfolk Island":
                return (
                    <>
                        <option value="Norfolk Island">Norfolk Island</option>
                    </>
                )
            case "Northern Mariana Islands":
                return (
                    <>
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                    </>
                )
            case "Norway":
                return (
                    <>
                        <option value="Akershus">Akershus</option>
                        <option value="Buskerud">Buskerud</option>
                        <option value="Finnmark">Finnmark</option>
                        <option value="Hedmark">Hedmark</option>
                        <option value="Hordaland">Hordaland</option>
                        <option value="Jan Mayen">Jan Mayen</option>
                        <option value="Møre og Romsdal">Møre og Romsdal</option>
                        <option value="Nord-Trøndelag">Nord-Trøndelag</option>
                        <option value="Nordland">Nordland</option>
                        <option value="Oppland">Oppland</option>
                        <option value="Oslo">Oslo</option>
                        <option value="Østfold">Østfold</option>
                        <option value="Rogaland">Rogaland</option>
                        <option value="Sogn og Fjordane">Sogn og Fjordane</option>
                        <option value="Sør-Trøndelag">Sør-Trøndelag</option>
                        <option value="Svalbard">Svalbard</option>
                        <option value="Telemark">Telemark</option>
                        <option value="Troms">Troms</option>
                        <option value="Trøndelag">Trøndelag</option>
                        <option value="Vest-Agder">Vest-Agder</option>
                        <option value="Vestfold">Vestfold</option>
                    </>
                )
            case "Oman":
                return (
                    <>
                        <option value="Ad Dakhiliyah Governorate">Ad Dakhiliyah Governorate</option>
                        <option value="Ad Dhahirah Governorate">Ad Dhahirah Governorate</option>
                        <option value="Al Batinah North Governorate">Al Batinah North Governorate</option>
                        <option value="Al Batinah Region">Al Batinah Region</option>
                        <option value="Al Batinah South Governorate">Al Batinah South Governorate</option>
                        <option value="Al Buraimi Governorate">Al Buraimi Governorate</option>
                        <option value="Al Wusta Governorate">Al Wusta Governorate</option>
                        <option value="Ash Sharqiyah North Governorate">Ash Sharqiyah North Governorate</option>
                        <option value="Ash Sharqiyah Region">Ash Sharqiyah Region</option>
                        <option value="Ash Sharqiyah South Governorate">Ash Sharqiyah South Governorate</option>
                        <option value="Dhofar Governorate">Dhofar Governorate</option>
                        <option value="Musandam Governorate">Musandam Governorate</option>
                        <option value="Muscat Governorate">Muscat Governorate</option>
                    </>
                )
            case "Pakistan":
                return (
                    <>
                        <option value="Azad Kashmir">Azad Kashmir</option>
                        <option value="Balochistan">Balochistan</option>
                        <option value="Federally Administered Tribal Areas">Federally Administered Tribal Areas</option>
                        <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                        <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>
                        <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Sindh">Sindh</option>
                    </>
                )
            case "Palau Island":
                return (
                    <>
                        <option value="Aimeliik">Aimeliik</option>
                        <option value="Airai">Airai</option>
                        <option value="Angaur">Angaur</option>
                        <option value="Hatohobei">Hatohobei</option>
                        <option value="Kayangel">Kayangel</option>
                        <option value="Koror">Koror</option>
                        <option value="Melekeok">Melekeok</option>
                        <option value="Ngaraard">Ngaraard</option>
                        <option value="Ngarchelong">Ngarchelong</option>
                        <option value="Ngardmau">Ngardmau</option>
                        <option value="Ngatpang">Ngatpang</option>
                        <option value="Ngchesar">Ngchesar</option>
                        <option value="Ngeremlengui">Ngeremlengui</option>
                        <option value="Ngiwal">Ngiwal</option>
                        <option value="Peleliu">Peleliu</option>
                        <option value="Sonsorol">Sonsorol</option>
                    </>
                )
            case "Palestine":
                return (
                    <>
                        <option value="Palestine">Palestine</option>
                    </>
                )
            case "Panama":
                return (
                    <>
                        <option value="Bocas del Toro Province">Bocas del Toro Province</option>
                        <option value="Chiriquí Province">Chiriquí Province</option>
                        <option value="Coclé Province">Coclé Province</option>
                        <option value="Colón Province">Colón Province</option>
                        <option value="Darién Province">Darién Province</option>
                        <option value="Emberá-Wounaan Comarca">Emberá-Wounaan Comarca</option>
                        <option value="Guna Yala">Guna Yala</option>
                        <option value="Herrera Province">Herrera Province</option>
                        <option value="Los Santos Province">Los Santos Province</option>
                        <option value="Ngöbe-Buglé Comarca">Ngöbe-Buglé Comarca</option>
                        <option value="Panamá Oeste Province">Panamá Oeste Province</option>
                        <option value="Panamá Province">Panamá Province</option>
                        <option value="Veraguas Province">Veraguas Province</option>
                    </>
                )
            case "Papua New Guinea":
                return (
                    <>
                        <option value="Bougainville">Bougainville</option>
                        <option value="Central Province">Central Province</option>
                        <option value="Chimbu Province">Chimbu Province</option>
                        <option value="East New Britain">East New Britain</option>
                        <option value="Eastern Highlands Province">Eastern Highlands Province</option>
                        <option value="Enga Province">Enga Province</option>
                        <option value="Gulf">Gulf</option>
                        <option value="Hela">Hela</option>
                        <option value="Jiwaka Province">Jiwaka Province</option>
                        <option value="Madang Province">Madang Province</option>
                        <option value="Manus Province">Manus Province</option>
                        <option value="Milne Bay Province">Milne Bay Province</option>
                        <option value="Morobe Province">Morobe Province</option>
                        <option value="New Ireland Province">New Ireland Province</option>
                        <option value="Oro Province">Oro Province</option>
                        <option value="Port Moresby">Port Moresby</option>
                        <option value="Sandaun Province">Sandaun Province</option>
                        <option value="Southern Highlands Province">Southern Highlands Province</option>
                        <option value="West New Britain Province">West New Britain Province</option>
                        <option value="Western Highlands Province">Western Highlands Province</option>
                        <option value="Western Province">Western Province</option>
                    </>
                )
            case "Paraguay":
                return (
                    <>
                        <option value="Alto Paraguay Department">Alto Paraguay Department</option>
                        <option value="Alto Paraná Department">Alto Paraná Department</option>
                        <option value="Amambay Department">Amambay Department</option>
                        <option value="Boquerón Department">Boquerón Department</option>
                        <option value="Caaguazú">Caaguazú</option>
                        <option value="Caazapá">Caazapá</option>
                        <option value="Canindeyú">Canindeyú</option>
                        <option value="Central Department">Central Department</option>
                        <option value="Concepción Department">Concepción Department</option>
                        <option value="Cordillera Department">Cordillera Department</option>
                        <option value="Guairá Department">Guairá Department</option>
                        <option value="Itapúa">Itapúa</option>
                        <option value="Misiones Department">Misiones Department</option>
                        <option value="Ñeembucú Department">Ñeembucú Department</option>
                        <option value="Paraguarí Department">Paraguarí Department</option>
                        <option value="Presidente Hayes Department">Presidente Hayes Department</option>
                        <option value="San Pedro Department">San Pedro Department</option>
                    </>
                )
            case "Peru":
                return (
                    <>
                        <option value="Amazonas">Amazonas</option>
                        <option value="Áncash">Áncash</option>
                        <option value="Apurímac">Apurímac</option>
                        <option value="Arequipa">Arequipa</option>
                        <option value="Ayacucho">Ayacucho</option>
                        <option value="Cajamarca">Cajamarca</option>
                        <option value="Callao">Callao</option>
                        <option value="Cusco">Cusco</option>
                        <option value="Huancavelica">Huancavelica</option>
                        <option value="Huanuco">Huanuco</option>
                        <option value="Ica">Ica</option>
                        <option value="Junín">Junín</option>
                        <option value="La Libertad">La Libertad</option>
                        <option value="Lambayeque">Lambayeque</option>
                        <option value="Lima">Lima</option>
                        <option value="Madre de Dios">Madre de Dios</option>
                        <option value="Moquegua">Moquegua</option>
                        <option value="Pasco">Pasco</option>
                        <option value="Piura">Piura</option>
                        <option value="Puno">Puno</option>
                        <option value="San Martín">San Martín</option>
                        <option value="Tacna">Tacna</option>
                        <option value="Tumbes">Tumbes</option>
                        <option value="Ucayali">Ucayali</option>
                    </>
                )
            case "Philippines":
                return (
                    <>
                        <option value="Abra">Abra</option>
                        <option value="Agusan del Norte">Agusan del Norte</option>
                        <option value="Agusan del Sur">Agusan del Sur</option>
                        <option value="Aklan">Aklan</option>
                        <option value="Albay">Albay</option>
                        <option value="Antique">Antique</option>
                        <option value="Apayao">Apayao</option>
                        <option value="Aurora">Aurora</option>
                        <option value="Autonomous Region in Muslim Mindanao">Autonomous Region in Muslim Mindanao</option>
                        <option value="Basilan">Basilan</option>
                        <option value="Bataan">Bataan</option>
                        <option value="Batanes">Batanes</option>
                        <option value="Batangas">Batangas</option>
                        <option value="Benguet">Benguet</option>
                        <option value="Bicol Region">Bicol Region</option>
                        <option value="Biliran">Biliran</option>
                        <option value="Bohol">Bohol</option>
                        <option value="Bukidnon">Bukidnon</option>
                        <option value="Bulacan">Bulacan</option>
                        <option value="Cagayan">Cagayan</option>
                        <option value="Cagayan Valley">Cagayan Valley</option>
                        <option value="Calabarzon">Calabarzon</option>
                        <option value="Camarines Norte">Camarines Norte</option>
                        <option value="Camarines Sur">Camarines Sur</option>
                        <option value="Camiguin">Camiguin</option>
                        <option value="Capiz">Capiz</option>
                        <option value="Caraga">Caraga</option>
                        <option value="Catanduanes">Catanduanes</option>
                        <option value="Cavite">Cavite</option>
                        <option value="Cebu">Cebu</option>
                        <option value="Central Luzon">Central Luzon</option>
                        <option value="Central Visayas">Central Visayas</option>
                        <option value="Compostela Valley">Compostela Valley</option>
                        <option value="Cordillera Administrative Region">Cordillera Administrative Region</option>
                        <option value="Cotabato">Cotabato</option>
                        <option value="Davao del Norte">Davao del Norte</option>
                        <option value="Davao del Sur">Davao del Sur</option>
                        <option value="Davao Occidental">Davao Occidental</option>
                        <option value="Davao Oriental">Davao Oriental</option>
                        <option value="Davao Region">Davao Region</option>
                        <option value="Dinagat Islands">Dinagat Islands</option>
                        <option value="Eastern Samar">Eastern Samar</option>
                        <option value="Eastern Visayas">Eastern Visayas</option>
                        <option value="Guimaras">Guimaras</option>
                        <option value="Ifugao">Ifugao</option>
                        <option value="Ilocos Norte">Ilocos Norte</option>
                        <option value="Ilocos Region">Ilocos Region</option>
                        <option value="Ilocos Sur">Ilocos Sur</option>
                        <option value="Iloilo">Iloilo</option>
                        <option value="Isabela">Isabela</option>
                        <option value="Kalinga">Kalinga</option>
                        <option value="La Union">La Union</option>
                        <option value="Laguna">Laguna</option>
                        <option value="Lanao del Norte">Lanao del Norte</option>
                        <option value="Lanao del Sur">Lanao del Sur</option>
                        <option value="Leyte">Leyte</option>
                        <option value="Maguindanao">Maguindanao</option>
                        <option value="Marinduque">Marinduque</option>
                        <option value="Masbate">Masbate</option>
                        <option value="Metro Manila">Metro Manila</option>
                        <option value="Mimaropa">Mimaropa</option>
                        <option value="Misamis Occidental">Misamis Occidental</option>
                        <option value="Misamis Oriental">Misamis Oriental</option>
                        <option value="Mountain Province">Mountain Province</option>
                        <option value="Negros Occidental">Negros Occidental</option>
                        <option value="Negros Oriental">Negros Oriental</option>
                        <option value="Northern Mindanao">Northern Mindanao</option>
                        <option value="Northern Samar">Northern Samar</option>
                        <option value="Nueva Ecija">Nueva Ecija</option>
                        <option value="Nueva Vizcaya">Nueva Vizcaya</option>
                        <option value="Occidental Mindoro">Occidental Mindoro</option>
                        <option value="Oriental Mindoro">Oriental Mindoro</option>
                        <option value="Palawan">Palawan</option>
                        <option value="Pampanga">Pampanga</option>
                        <option value="Pangasinan">Pangasinan</option>
                        <option value="Quezon">Quezon</option>
                        <option value="Quirino">Quirino</option>
                        <option value="Rizal">Rizal</option>
                        <option value="Romblon">Romblon</option>
                        <option value="Sarangani">Sarangani</option>
                        <option value="Siquijor">Siquijor</option>
                        <option value="Soccsksargen">Soccsksargen</option>
                        <option value="Sorsogon">Sorsogon</option>
                        <option value="South Cotabato">South Cotabato</option>
                        <option value="Southern Leyte">Southern Leyte</option>
                        <option value="Sultan Kudarat">Sultan Kudarat</option>
                        <option value="Sulu">Sulu</option>
                        <option value="Surigao del Norte">Surigao del Norte</option>
                        <option value="Surigao del Sur">Surigao del Sur</option>
                        <option value="Tarlac">Tarlac</option>
                        <option value="Tawi-Tawi">Tawi-Tawi</option>
                        <option value="Western Visayas">Western Visayas</option>
                        <option value="Zambales">Zambales</option>
                        <option value="Zamboanga del Norte">Zamboanga del Norte</option>
                        <option value="Zamboanga del Sur">Zamboanga del Sur</option>
                        <option value="Zamboanga Peninsula">Zamboanga Peninsula</option>
                        <option value="Zamboanga Sibugay">Zamboanga Sibugay</option>
                    </>
                )
            case "Pitcairn Island":
                return (
                    <>
                        <option value="Pitcairn Island">Pitcairn Island</option>
                    </>
                )
            case "Poland":
                return (
                    <>
                        <option value="Greater Poland Voivodeship">Greater Poland Voivodeship</option>
                        <option value="Kielce">Kielce</option>
                        <option value="Kuyavian-Pomeranian Voivodeship">Kuyavian-Pomeranian Voivodeship</option>
                        <option value="Lesser Poland Voivodeship">Lesser Poland Voivodeship</option>
                        <option value="Lower Silesian Voivodeship">Lower Silesian Voivodeship</option>
                        <option value="Lublin Voivodeship">Lublin Voivodeship</option>
                        <option value="Lubusz Voivodeship">Lubusz Voivodeship</option>
                        <option value="Łódź Voivodeship">Łódź Voivodeship</option>
                        <option value="Masovian Voivodeship">Masovian Voivodeship</option>
                        <option value="Opole Voivodeship">Opole Voivodeship</option>
                        <option value="Podkarpackie Voivodeship">Podkarpackie Voivodeship</option>
                        <option value="Podlaskie Voivodeship">Podlaskie Voivodeship</option>
                        <option value="Pomeranian Voivodeship">Pomeranian Voivodeship</option>
                        <option value="Silesian Voivodeship">Silesian Voivodeship</option>
                        <option value="Świętokrzyskie Voivodeship">Świętokrzyskie Voivodeship</option>
                        <option value="Warmian-Masurian Voivodeship">Warmian-Masurian Voivodeship</option>
                        <option value="West Pomeranian Voivodeship">West Pomeranian Voivodeship</option>
                    </>
                )
            case "Portugal":
                return (
                    <>
                        <option value="Aveiro District">Aveiro District</option>
                        <option value="Azores">Azores</option>
                        <option value="Beja District">Beja District</option>
                        <option value="Braga District">Braga District</option>
                        <option value="Bragança District">Bragança District</option>
                        <option value="Castelo Branco District">Castelo Branco District</option>
                        <option value="Coimbra District">Coimbra District</option>
                        <option value="Évora District">Évora District</option>
                        <option value="Faro District">Faro District</option>
                        <option value="Guarda District">Guarda District</option>
                        <option value="Leiria District">Leiria District</option>
                        <option value="Lisbon District">Lisbon District</option>
                        <option value="Madeira">Madeira</option>
                        <option value="Portalegre District">Portalegre District</option>
                        <option value="Porto District">Porto District</option>
                        <option value="Santarém District">Santarém District</option>
                        <option value="Setúbal District">Setúbal District</option>
                        <option value="Viana do Castelo District">Viana do Castelo District</option>
                        <option value="Vila Real District">Vila Real District</option>
                        <option value="Viseu District">Viseu District</option>
                    </>
                )
            case "Puerto Rico":
                return (
                    <>
                        <option value="Puerto Rico">Puerto Rico</option>
                    </>
                )
            case "Qatar":
                return (
                    <>
                        <option value="Al Daayen">Al Daayen</option>
                        <option value="Al Khor">Al Khor</option>
                        <option value="Al Rayyan Municipality">Al Rayyan Municipality</option>
                        <option value="Al Wakrah">Al Wakrah</option>
                        <option value="Al-Shahaniya">Al-Shahaniya</option>
                        <option value="Doha">Doha</option>
                        <option value="Madinat ash Shamal">Madinat ash Shamal</option>
                        <option value="Umm Salal Municipality">Umm Salal Municipality</option>
                    </>
                )
            case "Reunion":
                return (
                    <>
                        <option value="Reunion">Reunion</option>
                    </>
                )
            case "Romania":
                return (
                    <>
                        <option value="Alba">Alba</option>
                        <option value="Arad County">Arad County</option>
                        <option value="Arges">Arges</option>
                        <option value="Bacău County">Bacău County</option>
                        <option value="Bihor County">Bihor County</option>
                        <option value="Bistrița-Năsăud County">Bistrița-Năsăud County</option>
                        <option value="Botoșani County">Botoșani County</option>
                        <option value="Braila">Braila</option>
                        <option value="Brașov County">Brașov County</option>
                        <option value="Bucharest">Bucharest</option>
                        <option value="Buzău County">Buzău County</option>
                        <option value="Călărași County">Călărași County</option>
                        <option value="Caraș-Severin County">Caraș-Severin County</option>
                        <option value="Cluj County">Cluj County</option>
                        <option value="Constanța County">Constanța County</option>
                        <option value="Covasna County">Covasna County</option>
                        <option value="Dâmbovița County">Dâmbovița County</option>
                        <option value="Dolj County">Dolj County</option>
                        <option value="Galați County">Galați County</option>
                        <option value="Giurgiu County">Giurgiu County</option>
                        <option value="Gorj County">Gorj County</option>
                        <option value="Harghita County">Harghita County</option>
                        <option value="Hunedoara County">Hunedoara County</option>
                        <option value="Ialomița County">Ialomița County</option>
                        <option value="Iași County">Iași County</option>
                        <option value="Ilfov County">Ilfov County</option>
                        <option value="Mehedinți County">Mehedinți County</option>
                        <option value="Mureș County">Mureș County</option>
                        <option value="Neamț County">Neamț County</option>
                        <option value="Olt County">Olt County</option>
                        <option value="Prahova County">Prahova County</option>
                        <option value="Sălaj County">Sălaj County</option>
                        <option value="Satu Mare County">Satu Mare County</option>
                        <option value="Sibiu County">Sibiu County</option>
                        <option value="Suceava County">Suceava County</option>
                        <option value="Teleorman County">Teleorman County</option>
                        <option value="Timiș County">Timiș County</option>
                        <option value="Tulcea County">Tulcea County</option>
                        <option value="Vâlcea County">Vâlcea County</option>
                        <option value="Vaslui County">Vaslui County</option>
                        <option value="Vrancea County">Vrancea County</option>
                    </>
                )
            case "Russia":
                return (
                    <>
                        <option value="Altai Krai">Altai Krai</option>
                        <option value="Altai Republic">Altai Republic</option>
                        <option value="Amur Oblast">Amur Oblast</option>
                        <option value="Arkhangelsk">Arkhangelsk</option>
                        <option value="Astrakhan Oblast">Astrakhan Oblast</option>
                        <option value="Belgorod Oblast">Belgorod Oblast</option>
                        <option value="Bryansk Oblast">Bryansk Oblast</option>
                        <option value="Chechen Republic">Chechen Republic</option>
                        <option value="Chelyabinsk Oblast">Chelyabinsk Oblast</option>
                        <option value="Chukotka Autonomous Okrug">Chukotka Autonomous Okrug</option>
                        <option value="Chuvash Republic">Chuvash Republic</option>
                        <option value="Irkutsk">Irkutsk</option>
                        <option value="Ivanovo Oblast">Ivanovo Oblast</option>
                        <option value="Jewish Autonomous Oblast">Jewish Autonomous Oblast</option>
                        <option value="Kabardino-Balkar Republic">Kabardino-Balkar Republic</option>
                        <option value="Kaliningrad">Kaliningrad</option>
                        <option value="Kaluga Oblast">Kaluga Oblast</option>
                        <option value="Kamchatka Krai">Kamchatka Krai</option>
                        <option value="Karachay-Cherkess Republic">Karachay-Cherkess Republic</option>
                        <option value="Kemerovo Oblast">Kemerovo Oblast</option>
                        <option value="Khabarovsk Krai">Khabarovsk Krai</option>
                        <option value="Khanty-Mansi Autonomous Okrug">Khanty-Mansi Autonomous Okrug</option>
                        <option value="Kirov Oblast">Kirov Oblast</option>
                        <option value="Komi Republic">Komi Republic</option>
                        <option value="Kostroma Oblast">Kostroma Oblast</option>
                        <option value="Krasnodar Krai">Krasnodar Krai</option>
                        <option value="Krasnoyarsk Krai">Krasnoyarsk Krai</option>
                        <option value="Kurgan Oblast">Kurgan Oblast</option>
                        <option value="Kursk Oblast">Kursk Oblast</option>
                        <option value="Leningrad Oblast">Leningrad Oblast</option>
                        <option value="Lipetsk Oblast">Lipetsk Oblast</option>
                        <option value="Magadan Oblast">Magadan Oblast</option>
                        <option value="Mari El Republic">Mari El Republic</option>
                        <option value="Moscow">Moscow</option>
                        <option value="Moscow Oblast">Moscow Oblast</option>
                        <option value="Murmansk Oblast">Murmansk Oblast</option>
                        <option value="Nenets Autonomous Okrug">Nenets Autonomous Okrug</option>
                        <option value="Nizhny Novgorod Oblast">Nizhny Novgorod Oblast</option>
                        <option value="Novgorod Oblast">Novgorod Oblast</option>
                        <option value="Novosibirsk">Novosibirsk</option>
                        <option value="Omsk Oblast">Omsk Oblast</option>
                        <option value="Orenburg Oblast">Orenburg Oblast</option>
                        <option value="Oryol Oblast">Oryol Oblast</option>
                        <option value="Penza Oblast">Penza Oblast</option>
                        <option value="Perm Krai">Perm Krai</option>
                        <option value="Primorsky Krai">Primorsky Krai</option>
                        <option value="Pskov Oblast">Pskov Oblast</option>
                        <option value="Republic of Adygea">Republic of Adygea</option>
                        <option value="Republic of Bashkortostan">Republic of Bashkortostan</option>
                        <option value="Republic of Buryatia">Republic of Buryatia</option>
                        <option value="Republic of Dagestan">Republic of Dagestan</option>
                        <option value="Republic of Ingushetia">Republic of Ingushetia</option>
                        <option value="Republic of Kalmykia">Republic of Kalmykia</option>
                        <option value="Republic of Karelia">Republic of Karelia</option>
                        <option value="Republic of Khakassia">Republic of Khakassia</option>
                        <option value="Republic of Mordovia">Republic of Mordovia</option>
                        <option value="Republic of North Ossetia-Alania">Republic of North Ossetia-Alania</option>
                        <option value="Republic of Tatarstan">Republic of Tatarstan</option>
                        <option value="Rostov Oblast">Rostov Oblast</option>
                        <option value="Ryazan Oblast">Ryazan Oblast</option>
                        <option value="Saint Petersburg">Saint Petersburg</option>
                        <option value="Sakha Republic">Sakha Republic</option>
                        <option value="Sakhalin">Sakhalin</option>
                        <option value="Samara Oblast">Samara Oblast</option>
                        <option value="Saratov Oblast">Saratov Oblast</option>
                        <option value="Sevastopol">Sevastopol</option>
                        <option value="Smolensk Oblast">Smolensk Oblast</option>
                        <option value="Stavropol Krai">Stavropol Krai</option>
                        <option value="Sverdlovsk">Sverdlovsk</option>
                        <option value="Tambov Oblast">Tambov Oblast</option>
                        <option value="Tomsk Oblast">Tomsk Oblast</option>
                        <option value="Tula Oblast">Tula Oblast</option>
                        <option value="Tuva Republic">Tuva Republic</option>
                        <option value="Tver Oblast">Tver Oblast</option>
                        <option value="Tyumen Oblast">Tyumen Oblast</option>
                        <option value="Udmurt Republic">Udmurt Republic</option>
                        <option value="Ulyanovsk Oblast">Ulyanovsk Oblast</option>
                        <option value="Vladimir Oblast">Vladimir Oblast</option>
                        <option value="Vologda Oblast">Vologda Oblast</option>
                        <option value="Voronezh Oblast">Voronezh Oblast</option>
                        <option value="Yamalo-Nenets Autonomous Okrug">Yamalo-Nenets Autonomous Okrug</option>
                        <option value="Yaroslavl Oblast">Yaroslavl Oblast</option>
                        <option value="Zabaykalsky Krai">Zabaykalsky Krai</option>
                    </>
                )
            case "Rwanda":
                return (
                    <>
                        <option value="Eastern Province">Eastern Province</option>
                        <option value="Kigali district">Kigali district</option>
                        <option value="Northern Province">Northern Province</option>
                        <option value="Southern Province">Southern Province</option>
                        <option value="Western Province">Western Province</option>
                    </>
                )
            case "Saint Barthelemy":
                return (
                    <>
                        <option value="Saint Barthelemy">Saint Barthelemy</option>
                    </>
                )
            case "Saint Eustatius":
                return (
                    <>
                        <option value="Saint Eustatius">Saint Eustatius</option>
                    </>
                )
            case "Saint Helena":
                return (
                    <>
                        <option value="Saint Helena">Saint Helena</option>
                    </>
                )
            case "Saint Kitts-Nevis":
                return (
                    <>
                        <option value="Christ Church Nichola Town Parish">Christ Church Nichola Town Parish</option>
                        <option value="Nevis">Nevis</option>
                        <option value="Saint Anne Sandy Point Parish">Saint Anne Sandy Point Parish</option>
                        <option value="Saint George Gingerland Parish">Saint George Gingerland Parish</option>
                        <option value="Saint James Windward Parish">Saint James Windward Parish</option>
                        <option value="Saint John Capisterre Parish">Saint John Capisterre Parish</option>
                        <option value="Saint John Figtree Parish">Saint John Figtree Parish</option>
                        <option value="Saint Kitts">Saint Kitts</option>
                        <option value="Saint Mary Cayon Parish">Saint Mary Cayon Parish</option>
                        <option value="Saint Paul Capisterre Parish">Saint Paul Capisterre Parish</option>
                        <option value="Saint Paul Charlestown Parish">Saint Paul Charlestown Parish</option>
                        <option value="Saint Peter Basseterre Parish">Saint Peter Basseterre Parish</option>
                        <option value="Saint Thomas Lowland Parish">Saint Thomas Lowland Parish</option>
                        <option value="Saint Thomas Middle Island Parish">Saint Thomas Middle Island Parish</option>
                        <option value="Trinity Palmetto Point Parish">Trinity Palmetto Point Parish</option>
                    </>
                )
            case "Saint Lucia":
                return (
                    <>
                        <option value="Anse la Raye Quarter">Anse la Raye Quarter</option>
                        <option value="Canaries">Canaries</option>
                        <option value="Castries Quarter">Castries Quarter</option>
                        <option value="Choiseul Quarter">Choiseul Quarter</option>
                        <option value="Dauphin Quarter">Dauphin Quarter</option>
                        <option value="Dennery Quarter">Dennery Quarter</option>
                        <option value="Gros Islet Quarter">Gros Islet Quarter</option>
                        <option value="Laborie Quarter">Laborie Quarter</option>
                        <option value="Micoud Quarter">Micoud Quarter</option>
                        <option value="Praslin Quarter">Praslin Quarter</option>
                        <option value="Soufrière Quarter">Soufrière Quarter</option>
                        <option value="Vieux Fort Quarter">Vieux Fort Quarter</option>
                    </>
                )
            case "Saint Martin":
                return (
                    <>
                        <option value="Saint Martin">Saint Martin</option>
                    </>
                )
            case "Saint Pierre & Miquelon":
                return (
                    <>
                        <option value="Saint Pierre & Miquelon">Saint Pierre & Miquelon</option>
                    </>
                )
            case "Saint Vincent & Grenadies":
                return (
                    <>
                        <option value="Charlotte Parish">Charlotte Parish</option>
                        <option value="Grenadines Parish">Grenadines Parish</option>
                        <option value="Saint Andrew Parish">Saint Andrew Parish</option>
                        <option value="Saint David Parish">Saint David Parish</option>
                        <option value="Saint George Parish">Saint George Parish</option>
                        <option value="Saint Patrick Parish">Saint Patrick Parish</option>
                    </>
                )
            case "Saipan":
                return (
                    <>
                        <option value="Saipan">Saipan</option>
                    </>
                )
            case "Samoa":
                return (
                    <>
                        <option value="A'ana">A'ana</option>
                        <option value="Aiga-i-le-Tai">Aiga-i-le-Tai</option>
                        <option value="Atua">Atua</option>
                        <option value="Fa'asaleleaga">Fa'asaleleaga</option>
                        <option value="Gaga'emauga">Gaga'emauga</option>
                        <option value="Gaga'ifomauga">Gaga'ifomauga</option>
                        <option value="Palauli">Palauli</option>
                        <option value="Satupa'itea">Satupa'itea</option>
                        <option value="Tuamasaga">Tuamasaga</option>
                        <option value="Va'a-o-Fonoti">Va'a-o-Fonoti</option>
                        <option value="Vaisigano">Vaisigano</option>
                    </>
                )
            case "Samoa American":
                return (
                    <>
                        <option value="Samoa American">Samoa American</option>
                    </>
                )
            case "San Marino":
                return (
                    <>
                        <option value="Acquaviva">Acquaviva</option>
                        <option value="Borgo Maggiore">Borgo Maggiore</option>
                        <option value="Chiesanuova">Chiesanuova</option>
                        <option value="Domagnano">Domagnano</option>
                        <option value="Faetano">Faetano</option>
                        <option value="Fiorentino">Fiorentino</option>
                        <option value="Montegiardino">Montegiardino</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Serravalle">Serravalle</option>
                    </>
                )
            case "Sao Tome & Principe":
                return (
                    <>
                        <option value="Príncipe Province">Príncipe Province</option>
                        <option value="São Tomé Province">São Tomé Province</option>
                    </>
                )
            case "Saudi Arabia":
                return (
                    <>
                        <option value="'Asir Region">'Asir Region</option>
                        <option value="Al Bahah Region">Al Bahah Region</option>
                        <option value="Al Jawf Region">Al Jawf Region</option>
                        <option value="Al Madinah Region">Al Madinah Region</option>
                        <option value="Al-Qassim Region">Al-Qassim Region</option>
                        <option value="Eastern Province">Eastern Province</option>
                        <option value="Ha'il Region">Ha'il Region</option>
                        <option value="Jizan Region">Jizan Region</option>
                        <option value="Makkah Region">Makkah Region</option>
                        <option value="Najran Region">Najran Region</option>
                        <option value="Northern Borders Region">Northern Borders Region</option>
                        <option value="Riyadh Region">Riyadh Region</option>
                        <option value="Tabuk Region">Tabuk Region</option>
                    </>
                )
            case "Senegal":
                return (
                    <>
                        <option value="Dakar">Dakar</option>
                        <option value="Diourbel Region">Diourbel Region</option>
                        <option value="Fatick">Fatick</option>
                        <option value="Kaffrine">Kaffrine</option>
                        <option value="Kaolack">Kaolack</option>
                        <option value="Kédougou">Kédougou</option>
                        <option value="Kolda">Kolda</option>
                        <option value="Louga">Louga</option>
                        <option value="Matam">Matam</option>
                        <option value="Saint-Louis">Saint-Louis</option>
                        <option value="Sédhiou">Sédhiou</option>
                        <option value="Tambacounda Region">Tambacounda Region</option>
                        <option value="Thiès Region">Thiès Region</option>
                        <option value="Ziguinchor">Ziguinchor</option>
                    </>
                )
            case "Serbia":
                return (
                    <>
                        <option value="Belgrade">Belgrade</option>
                        <option value="Bor District">Bor District</option>
                        <option value="Braničevo District">Braničevo District</option>
                        <option value="Central Banat District">Central Banat District</option>
                        <option value="Jablanica District">Jablanica District</option>
                        <option value="Kolubara District">Kolubara District</option>
                        <option value="Mačva District">Mačva District</option>
                        <option value="Moravica District">Moravica District</option>
                        <option value="Nišava District">Nišava District</option>
                        <option value="North Bačka District">North Bačka District</option>
                        <option value="North Banat District">North Banat District</option>
                        <option value="Pčinja District">Pčinja District</option>
                        <option value="Pirot District">Pirot District</option>
                        <option value="Podunavlje District">Podunavlje District</option>
                        <option value="Pomoravlje District">Pomoravlje District</option>
                        <option value="Rasina District">Rasina District</option>
                        <option value="Raška District">Raška District</option>
                        <option value="South Bačka District">South Bačka District</option>
                        <option value="South Banat District">South Banat District</option>
                        <option value="Srem District">Srem District</option>
                        <option value="Šumadija District">Šumadija District</option>
                        <option value="Toplica District">Toplica District</option>
                        <option value="Vojvodina">Vojvodina</option>
                        <option value="West Bačka District">West Bačka District</option>
                        <option value="Zaječar District">Zaječar District</option>
                        <option value="Zlatibor District">Zlatibor District</option>
                    </>
                )
            case "Serbia & Montenegro":
                return (
                    <>
                        <option value="Serbia & Montenegro">Serbia & Montenegro</option>
                    </>
                )
            case "Seychelles":
                return (
                    <>
                        <option value="Anse Boileau">Anse Boileau</option>
                        <option value="Anse Royale">Anse Royale</option>
                        <option value="Anse-aux-Pins">Anse-aux-Pins</option>
                        <option value="Au Cap">Au Cap</option>
                        <option value="Baie Lazare">Baie Lazare</option>
                        <option value="Baie Sainte Anne">Baie Sainte Anne</option>
                        <option value="Beau Vallon">Beau Vallon</option>
                        <option value="Bel Air">Bel Air</option>
                        <option value="Bel Ombre">Bel Ombre</option>
                        <option value="Cascade">Cascade</option>
                        <option value="Glacis">Glacis</option>
                        <option value="Grand'Anse Mahé">Grand'Anse Mahé</option>
                        <option value="Grand'Anse Praslin">Grand'Anse Praslin</option>
                        <option value="La Digue">La Digue</option>
                        <option value="La Rivière Anglaise">La Rivière Anglaise</option>
                        <option value="Les Mamelles">Les Mamelles</option>
                        <option value="Mont Buxton">Mont Buxton</option>
                        <option value="Mont Fleuri">Mont Fleuri</option>
                        <option value="Plaisance">Plaisance</option>
                        <option value="Pointe La Rue">Pointe La Rue</option>
                        <option value="Port Glaud">Port Glaud</option>
                        <option value="Roche Caiman">Roche Caiman</option>
                        <option value="Saint Louis">Saint Louis</option>
                        <option value="Takamaka">Takamaka</option>
                    </>
                )
            case "Sierra Lenoe":
                return (
                    <>
                        <option value="Eastern Province">Eastern Province</option>
                        <option value="Northern Province">Northern Province</option>
                        <option value="Southern Province">Southern Province</option>
                        <option value="Western Area">Western Area</option>
                    </>
                )
            case "Singapore":
                return (
                    <>
                        <option value="Central Singapore Community Development Council">Central Singapore Community Development Council</option>
                        <option value="North East Community Development Council">North East Community Development Council</option>
                        <option value="North West Community Development Council">North West Community Development Council</option>
                        <option value="South East Community Development Council">South East Community Development Council</option>
                        <option value="South West Community Development Council">South West Community Development Council</option>
                    </>
                )
            case "Sint Maarten":
                return (
                    <>
                        <option value="Sint Maarten">Sint Maarten</option>
                    </>
                )
            case "Slovakia":
                return (
                    <>
                        <option value="Banská Bystrica Region">Banská Bystrica Region</option>
                        <option value="Bratislava Region">Bratislava Region</option>
                        <option value="Košice Region">Košice Region</option>
                        <option value="Nitra Region">Nitra Region</option>
                        <option value="Prešov Region">Prešov Region</option>
                        <option value="Trenčín Region">Trenčín Region</option>
                        <option value="Trnava Region">Trnava Region</option>
                        <option value="Žilina Region">Žilina Region</option>
                    </>
                )
            case "Slovenia":
                return (
                    <>
                        <option value="Ajdovščina Municipality">Ajdovščina Municipality</option>
                        <option value="Ankaran Municipality">Ankaran Municipality</option>
                        <option value="Beltinci Municipality">Beltinci Municipality</option>
                        <option value="Benedikt Municipality">Benedikt Municipality</option>
                        <option value="Bistrica ob Sotli Municipality">Bistrica ob Sotli Municipality</option>
                        <option value="Bled Municipality">Bled Municipality</option>
                        <option value="Bloke Municipality">Bloke Municipality</option>
                        <option value="Bohinj Municipality">Bohinj Municipality</option>
                        <option value="Borovnica Municipality">Borovnica Municipality</option>
                        <option value="Bovec Municipality">Bovec Municipality</option>
                        <option value="Braslovče Municipality">Braslovče Municipality</option>
                        <option value="Brda Municipality">Brda Municipality</option>
                        <option value="Brežice Municipality">Brežice Municipality</option>
                        <option value="Brezovica Municipality">Brezovica Municipality</option>
                        <option value="Cankova Municipality">Cankova Municipality</option>
                        <option value="Cerklje na Gorenjskem Municipality">Cerklje na Gorenjskem Municipality</option>
                        <option value="Cerknica Municipality">Cerknica Municipality</option>
                        <option value="Cerkno Municipality">Cerkno Municipality</option>
                        <option value="Cerkvenjak Municipality">Cerkvenjak Municipality</option>
                        <option value="City Municipality of Celje">City Municipality of Celje</option>
                        <option value="City Municipality of Novo Mesto">City Municipality of Novo Mesto</option>
                        <option value="Črenšovci Municipality">Črenšovci Municipality</option>
                        <option value="Črna na Koroškem Municipality">Črna na Koroškem Municipality</option>
                        <option value="Črnomelj Municipality">Črnomelj Municipality</option>
                        <option value="Destrnik Municipality">Destrnik Municipality</option>
                        <option value="Divača Municipality">Divača Municipality</option>
                        <option value="Dobje Municipality">Dobje Municipality</option>
                        <option value="Dobrepolje Municipality">Dobrepolje Municipality</option>
                        <option value="Dobrna Municipality">Dobrna Municipality</option>
                        <option value="Dobrova–Polhov Gradec Municipality">Dobrova–Polhov Gradec Municipality</option>
                        <option value="Dobrovnik Municipality">Dobrovnik Municipality</option>
                        <option value="Dol pri Ljubljani Municipality">Dol pri Ljubljani Municipality</option>
                        <option value="Dolenjske Toplice Municipality">Dolenjske Toplice Municipality</option>
                        <option value="Domžale Municipality">Domžale Municipality</option>
                        <option value="Dornava Municipality">Dornava Municipality</option>
                        <option value="Dravograd Municipality">Dravograd Municipality</option>
                        <option value="Duplek Municipality">Duplek Municipality</option>
                        <option value="Gorenja Vas–Poljane Municipality">Gorenja Vas–Poljane Municipality</option>
                        <option value="Gorišnica Municipality">Gorišnica Municipality</option>
                        <option value="Gorje Municipality">Gorje Municipality</option>
                        <option value="Gornja Radgona Municipality">Gornja Radgona Municipality</option>
                        <option value="Gornji Grad Municipality">Gornji Grad Municipality</option>
                        <option value="Gornji Petrovci Municipality">Gornji Petrovci Municipality</option>
                        <option value="Grad Municipality">Grad Municipality</option>
                        <option value="Grosuplje Municipality">Grosuplje Municipality</option>
                        <option value="Hajdina Municipality">Hajdina Municipality</option>
                        <option value="Hoče–Slivnica Municipality">Hoče–Slivnica Municipality</option>
                        <option value="Hodoš Municipality">Hodoš Municipality</option>
                        <option value="Horjul Municipality">Horjul Municipality</option>
                        <option value="Hrastnik Municipality">Hrastnik Municipality</option>
                        <option value="Hrpelje–Kozina Municipality">Hrpelje–Kozina Municipality</option>
                        <option value="Idrija Municipality">Idrija Municipality</option>
                        <option value="Ig Municipality">Ig Municipality</option>
                        <option value="Ivančna Gorica Municipality">Ivančna Gorica Municipality</option>
                        <option value="Izola Municipality">Izola Municipality</option>
                        <option value="Jesenice Municipality">Jesenice Municipality</option>
                        <option value="Jezersko Municipality">Jezersko Municipality</option>
                        <option value="Juršinci Municipality">Juršinci Municipality</option>
                        <option value="Kamnik Municipality">Kamnik Municipality</option>
                        <option value="Kanal ob Soči Municipality">Kanal ob Soči Municipality</option>
                        <option value="Kidričevo Municipality">Kidričevo Municipality</option>
                        <option value="Kobarid Municipality">Kobarid Municipality</option>
                        <option value="Kobilje Municipality">Kobilje Municipality</option>
                        <option value="Kočevje Municipality">Kočevje Municipality</option>
                        <option value="Komen Municipality">Komen Municipality</option>
                        <option value="Komenda Municipality">Komenda Municipality</option>
                        <option value="Koper City Municipality">Koper City Municipality</option>
                        <option value="Kostanjevica na Krki Municipality">Kostanjevica na Krki Municipality</option>
                        <option value="Kostel Municipality">Kostel Municipality</option>
                        <option value="Kozje Municipality">Kozje Municipality</option>
                        <option value="Kranj City Municipality">Kranj City Municipality</option>
                        <option value="Kranjska Gora Municipality">Kranjska Gora Municipality</option>
                        <option value="Križevci Municipality">Križevci Municipality</option>
                        <option value="Kungota">Kungota</option>
                        <option value="Kuzma Municipality">Kuzma Municipality</option>
                        <option value="Laško Municipality">Laško Municipality</option>
                        <option value="Lenart Municipality">Lenart Municipality</option>
                        <option value="Lendava Municipality">Lendava Municipality</option>
                        <option value="Litija Municipality">Litija Municipality</option>
                        <option value="Ljubljana City Municipality">Ljubljana City Municipality</option>
                        <option value="Ljubno Municipality">Ljubno Municipality</option>
                        <option value="Ljutomer Municipality">Ljutomer Municipality</option>
                        <option value="Log–Dragomer Municipality">Log–Dragomer Municipality</option>
                        <option value="Logatec Municipality">Logatec Municipality</option>
                        <option value="Loška Dolina Municipality">Loška Dolina Municipality</option>
                        <option value="Loški Potok Municipality">Loški Potok Municipality</option>
                        <option value="Lovrenc na Pohorju Municipality">Lovrenc na Pohorju Municipality</option>
                        <option value="Luče Municipality">Luče Municipality</option>
                        <option value="Lukovica Municipality">Lukovica Municipality</option>
                        <option value="Majšperk Municipality">Majšperk Municipality</option>
                        <option value="Makole Municipality">Makole Municipality</option>
                        <option value="Maribor City Municipality">Maribor City Municipality</option>
                        <option value="Markovci Municipality">Markovci Municipality</option>
                        <option value="Medvode Municipality">Medvode Municipality</option>
                        <option value="Mengeš Municipality">Mengeš Municipality</option>
                        <option value="Metlika Municipality">Metlika Municipality</option>
                        <option value="Mežica Municipality">Mežica Municipality</option>
                        <option value="Miklavž na Dravskem Polju Municipality">Miklavž na Dravskem Polju Municipality</option>
                        <option value="Miren–Kostanjevica Municipality">Miren–Kostanjevica Municipality</option>
                        <option value="Mirna Municipality">Mirna Municipality</option>
                        <option value="Mirna Peč Municipality">Mirna Peč Municipality</option>
                        <option value="Mislinja Municipality">Mislinja Municipality</option>
                        <option value="Mokronog–Trebelno Municipality">Mokronog–Trebelno Municipality</option>
                        <option value="Moravče Municipality">Moravče Municipality</option>
                        <option value="Moravske Toplice Municipality">Moravske Toplice Municipality</option>
                        <option value="Mozirje Municipality">Mozirje Municipality</option>
                        <option value="Municipality of Apače">Municipality of Apače</option>
                        <option value="Municipality of Cirkulane">Municipality of Cirkulane</option>
                        <option value="Municipality of Ilirska Bistrica">Municipality of Ilirska Bistrica</option>
                        <option value="Municipality of Krško">Municipality of Krško</option>
                        <option value="Municipality of Škofljica">Municipality of Škofljica</option>
                        <option value="Murska Sobota City Municipality">Murska Sobota City Municipality</option>
                        <option value="Muta Municipality">Muta Municipality</option>
                        <option value="Naklo Municipality">Naklo Municipality</option>
                        <option value="Nazarje Municipality">Nazarje Municipality</option>
                        <option value="Nova Gorica City Municipality">Nova Gorica City Municipality</option>
                        <option value="Odranci Municipality">Odranci Municipality</option>
                        <option value="Oplotnica">Oplotnica</option>
                        <option value="Ormož Municipality">Ormož Municipality</option>
                        <option value="Osilnica Municipality">Osilnica Municipality</option>
                        <option value="Pesnica Municipality">Pesnica Municipality</option>
                        <option value="Piran Municipality">Piran Municipality</option>
                        <option value="Pivka Municipality">Pivka Municipality</option>
                        <option value="Podčetrtek Municipality">Podčetrtek Municipality</option>
                        <option value="Podlehnik Municipality">Podlehnik Municipality</option>
                        <option value="Podvelka Municipality">Podvelka Municipality</option>
                        <option value="Poljčane Municipality">Poljčane Municipality</option>
                        <option value="Polzela Municipality">Polzela Municipality</option>
                        <option value="Postojna Municipality">Postojna Municipality</option>
                        <option value="Prebold Municipality">Prebold Municipality</option>
                        <option value="Preddvor Municipality">Preddvor Municipality</option>
                        <option value="Prevalje Municipality">Prevalje Municipality</option>
                        <option value="Ptuj City Municipality">Ptuj City Municipality</option>
                        <option value="Puconci Municipality">Puconci Municipality</option>
                        <option value="Rače–Fram Municipality">Rače–Fram Municipality</option>
                        <option value="Radeče Municipality">Radeče Municipality</option>
                        <option value="Radenci Municipality">Radenci Municipality</option>
                        <option value="Radlje ob Dravi Municipality">Radlje ob Dravi Municipality</option>
                        <option value="Radovljica Municipality">Radovljica Municipality</option>
                        <option value="Ravne na Koroškem Municipality">Ravne na Koroškem Municipality</option>
                        <option value="Razkrižje Municipality">Razkrižje Municipality</option>
                        <option value="Rečica ob Savinji Municipality">Rečica ob Savinji Municipality</option>
                        <option value="Renče–Vogrsko Municipality">Renče–Vogrsko Municipality</option>
                        <option value="Ribnica Municipality">Ribnica Municipality</option>
                        <option value="Ribnica na Pohorju Municipality">Ribnica na Pohorju Municipality</option>
                        <option value="Rogaška Slatina Municipality">Rogaška Slatina Municipality</option>
                        <option value="Rogašovci Municipality">Rogašovci Municipality</option>
                        <option value="Rogatec Municipality">Rogatec Municipality</option>
                        <option value="Ruše Municipality">Ruše Municipality</option>
                        <option value="Šalovci Municipality">Šalovci Municipality</option>
                        <option value="Selnica ob Dravi Municipality">Selnica ob Dravi Municipality</option>
                        <option value="Semič Municipality">Semič Municipality</option>
                        <option value="Šempeter–Vrtojba Municipality">Šempeter–Vrtojba Municipality</option>
                        <option value="Šenčur Municipality">Šenčur Municipality</option>
                        <option value="Šentilj Municipality">Šentilj Municipality</option>
                        <option value="Šentjernej Municipality">Šentjernej Municipality</option>
                        <option value="Šentjur Municipality">Šentjur Municipality</option>
                        <option value="Šentrupert Municipality">Šentrupert Municipality</option>
                        <option value="Sevnica Municipality">Sevnica Municipality</option>
                        <option value="Sežana Municipality">Sežana Municipality</option>
                        <option value="Škocjan Municipality">Škocjan Municipality</option>
                        <option value="Škofja Loka Municipality">Škofja Loka Municipality</option>
                        <option value="Slovenj Gradec City Municipality">Slovenj Gradec City Municipality</option>
                        <option value="Slovenska Bistrica Municipality">Slovenska Bistrica Municipality</option>
                        <option value="Slovenske Konjice Municipality">Slovenske Konjice Municipality</option>
                        <option value="Šmarje pri Jelšah Municipality">Šmarje pri Jelšah Municipality</option>
                        <option value="Šmarješke Toplice Municipality">Šmarješke Toplice Municipality</option>
                        <option value="Šmartno ob Paki Municipality">Šmartno ob Paki Municipality</option>
                        <option value="Šmartno pri Litiji Municipality">Šmartno pri Litiji Municipality</option>
                        <option value="Sodražica Municipality">Sodražica Municipality</option>
                        <option value="Solčava Municipality">Solčava Municipality</option>
                        <option value="Šoštanj Municipality">Šoštanj Municipality</option>
                        <option value="Središče ob Dravi">Središče ob Dravi</option>
                        <option value="Starše Municipality">Starše Municipality</option>
                        <option value="Štore Municipality">Štore Municipality</option>
                        <option value="Straža Municipality">Straža Municipality</option>
                        <option value="Sveta Ana Municipality">Sveta Ana Municipality</option>
                        <option value="Sveta Trojica v Slovenskih Goricah Municipality">Sveta Trojica v Slovenskih Goricah Municipality</option>
                        <option value="Sveti Andraž v Slovenskih Goricah Municipality">Sveti Andraž v Slovenskih Goricah Municipality</option>
                        <option value="Sveti Jurij ob Ščavnici Municipality">Sveti Jurij ob Ščavnici Municipality</option>
                        <option value="Sveti Jurij v Slovenskih Goricah Municipality">Sveti Jurij v Slovenskih Goricah Municipality</option>
                        <option value="Sveti Tomaž Municipality">Sveti Tomaž Municipality</option>
                        <option value="Tabor Municipality">Tabor Municipality</option>
                        <option value="Tišina Municipality">Tišina Municipality</option>
                        <option value="Tolmin Municipality">Tolmin Municipality</option>
                        <option value="Trbovlje Municipality">Trbovlje Municipality</option>
                        <option value="Trebnje Municipality">Trebnje Municipality</option>
                        <option value="Trnovska Vas Municipality">Trnovska Vas Municipality</option>
                        <option value="Tržič Municipality">Tržič Municipality</option>
                        <option value="Trzin Municipality">Trzin Municipality</option>
                        <option value="Turnišče Municipality">Turnišče Municipality</option>
                        <option value="Velika Polana Municipality">Velika Polana Municipality</option>
                        <option value="Velike Lašče Municipality">Velike Lašče Municipality</option>
                        <option value="Veržej Municipality">Veržej Municipality</option>
                        <option value="Videm Municipality">Videm Municipality</option>
                        <option value="Vipava Municipality">Vipava Municipality</option>
                        <option value="Vitanje Municipality">Vitanje Municipality</option>
                        <option value="Vodice Municipality">Vodice Municipality</option>
                        <option value="Vojnik Municipality">Vojnik Municipality</option>
                        <option value="Vransko Municipality">Vransko Municipality</option>
                        <option value="Vrhnika Municipality">Vrhnika Municipality</option>
                        <option value="Vuzenica Municipality">Vuzenica Municipality</option>
                        <option value="Zagorje ob Savi Municipality">Zagorje ob Savi Municipality</option>
                        <option value="Žalec Municipality">Žalec Municipality</option>
                        <option value="Zavrč Municipality">Zavrč Municipality</option>
                        <option value="Železniki Municipality">Železniki Municipality</option>
                        <option value="Žetale Municipality">Žetale Municipality</option>
                        <option value="Žiri Municipality">Žiri Municipality</option>
                        <option value="Žirovnica Municipality">Žirovnica Municipality</option>
                        <option value="Zreče Municipality">Zreče Municipality</option>
                        <option value="Žužemberk Municipality">Žužemberk Municipality</option>
                    </>
                )
            case "Solomon Islands":
                return (
                    <>
                        <option value="Central Province">Central Province</option>
                        <option value="Choiseul Province">Choiseul Province</option>
                        <option value="Guadalcanal Province">Guadalcanal Province</option>
                        <option value="Honiara">Honiara</option>
                        <option value="Isabel Province">Isabel Province</option>
                        <option value="Makira-Ulawa Province">Makira-Ulawa Province</option>
                        <option value="Malaita Province">Malaita Province</option>
                        <option value="Rennell and Bellona Province">Rennell and Bellona Province</option>
                        <option value="Temotu Province">Temotu Province</option>
                        <option value="Western Province">Western Province</option>
                    </>
                )
            case "Somalia":
                return (
                    <>
                        <option value="Awdal Region">Awdal Region</option>
                        <option value="Bakool">Bakool</option>
                        <option value="Banaadir">Banaadir</option>
                        <option value="Bari">Bari</option>
                        <option value="Bay">Bay</option>
                        <option value="Galguduud">Galguduud</option>
                        <option value="Gedo">Gedo</option>
                        <option value="Hiran">Hiran</option>
                        <option value="Lower Juba">Lower Juba</option>
                        <option value="Lower Shebelle">Lower Shebelle</option>
                        <option value="Middle Juba">Middle Juba</option>
                        <option value="Middle Shebelle">Middle Shebelle</option>
                        <option value="Mudug">Mudug</option>
                        <option value="Nugal">Nugal</option>
                        <option value="Sanaag Region">Sanaag Region</option>
                        <option value="Togdheer Region">Togdheer Region</option>
                    </>
                )
            case "South Africa":
                return (
                    <>
                        <option value="Eastern Cape">Eastern Cape</option>
                        <option value="Free State">Free State</option>
                        <option value="Gauteng">Gauteng</option>
                        <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                        <option value="Limpopo">Limpopo</option>
                        <option value="Mpumalanga">Mpumalanga</option>
                        <option value="North West">North West</option>
                        <option value="Northern Cape">Northern Cape</option>
                        <option value="Western Cape">Western Cape</option>
                    </>
                )
            case "South Georgia & the South Sandwich Islands":
                return (
                    <>
                        <option value="South Georgia & the South Sandwich Islands">South Georgia & the South Sandwich Islands</option>
                    </>
                )
            case "South Sudan":
                return (
                    <>
                        <option value="Central Equatoria">Central Equatoria</option>
                        <option value="Eastern Equatoria">Eastern Equatoria</option>
                        <option value="Jonglei State">Jonglei State</option>
                        <option value="Lakes">Lakes</option>
                        <option value="Northern Bahr el Ghazal">Northern Bahr el Ghazal</option>
                        <option value="Unity">Unity</option>
                        <option value="Upper Nile">Upper Nile</option>
                        <option value="Warrap">Warrap</option>
                        <option value="Western Bahr el Ghazal">Western Bahr el Ghazal</option>
                        <option value="Western Equatoria">Western Equatoria</option>
                    </>
                )
            case "Spain":
                return (
                    <>
                        <option value="A Coruña Province">A Coruña Province</option>
                        <option value="Albacete Province">Albacete Province</option>
                        <option value="Alicante Province">Alicante Province</option>
                        <option value="Almería Province">Almería Province</option>
                        <option value="Andalusia">Andalusia</option>
                        <option value="Araba / Álava">Araba / Álava</option>
                        <option value="Aragon">Aragon</option>
                        <option value="Badajoz Province">Badajoz Province</option>
                        <option value="Balearic Islands">Balearic Islands</option>
                        <option value="Barcelona Province">Barcelona Province</option>
                        <option value="Basque Country">Basque Country</option>
                        <option value="Biscay">Biscay</option>
                        <option value="Burgos Province">Burgos Province</option>
                        <option value="Cáceres Province">Cáceres Province</option>
                        <option value="Cádiz Province">Cádiz Province</option>
                        <option value="Canary Islands">Canary Islands</option>
                        <option value="Cantabria">Cantabria</option>
                        <option value="Castellón Province">Castellón Province</option>
                        <option value="Castile and León">Castile and León</option>
                        <option value="Castile-La Mancha">Castile-La Mancha</option>
                        <option value="Catalonia">Catalonia</option>
                        <option value="Ceuta">Ceuta</option>
                        <option value="Ciudad Real Province">Ciudad Real Province</option>
                        <option value="Community of Madrid">Community of Madrid</option>
                        <option value="Córdoba Province">Córdoba Province</option>
                        <option value="Cuenca Province">Cuenca Province</option>
                        <option value="Extremadura">Extremadura</option>
                        <option value="Galicia">Galicia</option>
                        <option value="Gipuzkoa">Gipuzkoa</option>
                        <option value="Girona Province">Girona Province</option>
                        <option value="Granada Province">Granada Province</option>
                        <option value="Guadalajara Province">Guadalajara Province</option>
                        <option value="Huelva Province">Huelva Province</option>
                        <option value="Huesca Province">Huesca Province</option>
                        <option value="Jaén Province">Jaén Province</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Las Palmas Province">Las Palmas Province</option>
                        <option value="León Province">León Province</option>
                        <option value="Lleida Province">Lleida Province</option>
                        <option value="Lugo Province">Lugo Province</option>
                        <option value="Madrid Province">Madrid Province</option>
                        <option value="Málaga Province">Málaga Province</option>
                        <option value="Melilla">Melilla</option>
                        <option value="Murcia Province">Murcia Province</option>
                        <option value="Navarre">Navarre</option>
                        <option value="Ourense Province">Ourense Province</option>
                        <option value="Palencia Province">Palencia Province</option>
                        <option value="Pontevedra Province">Pontevedra Province</option>
                        <option value="Province of Asturias">Province of Asturias</option>
                        <option value="Province of Ávila">Province of Ávila</option>
                        <option value="Region of Murcia">Region of Murcia</option>
                        <option value="Salamanca Province">Salamanca Province</option>
                        <option value="Santa Cruz de Tenerife Province">Santa Cruz de Tenerife Province</option>
                        <option value="Segovia Province">Segovia Province</option>
                        <option value="Seville Province">Seville Province</option>
                        <option value="Soria Province">Soria Province</option>
                        <option value="Tarragona Province">Tarragona Province</option>
                        <option value="Teruel Province">Teruel Province</option>
                        <option value="Toledo Province">Toledo Province</option>
                        <option value="Valencia Province">Valencia Province</option>
                        <option value="Valencian Community">Valencian Community</option>
                        <option value="Valladolid Province">Valladolid Province</option>
                        <option value="Zamora Province">Zamora Province</option>
                        <option value="Zaragoza Province">Zaragoza Province</option>
                    </>
                )
            case "Sri Lanka":
                return (
                    <>
                        <option value="Ampara District">Ampara District</option>
                        <option value="Anuradhapura District">Anuradhapura District</option>
                        <option value="Badulla District">Badulla District</option>
                        <option value="Batticaloa District">Batticaloa District</option>
                        <option value="Central Province">Central Province</option>
                        <option value="Colombo District">Colombo District</option>
                        <option value="Eastern Province">Eastern Province</option>
                        <option value="Galle District">Galle District</option>
                        <option value="Gampaha District">Gampaha District</option>
                        <option value="Hambantota District">Hambantota District</option>
                        <option value="Jaffna District">Jaffna District</option>
                        <option value="Kalutara District">Kalutara District</option>
                        <option value="Kandy District">Kandy District</option>
                        <option value="Kegalle District">Kegalle District</option>
                        <option value="Kilinochchi District">Kilinochchi District</option>
                        <option value="Mannar District">Mannar District</option>
                        <option value="Matale District">Matale District</option>
                        <option value="Matara District">Matara District</option>
                        <option value="Monaragala District">Monaragala District</option>
                        <option value="Mullaitivu District">Mullaitivu District</option>
                        <option value="North Central Province">North Central Province</option>
                        <option value="North Western Province">North Western Province</option>
                        <option value="Northern Province">Northern Province</option>
                        <option value="Nuwara Eliya District">Nuwara Eliya District</option>
                        <option value="Polonnaruwa District">Polonnaruwa District</option>
                        <option value="Puttalam District">Puttalam District</option>
                        <option value="Ratnapura district">Ratnapura district</option>
                        <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
                        <option value="Southern Province">Southern Province</option>
                        <option value="Trincomalee District">Trincomalee District</option>
                        <option value="Uva Province">Uva Province</option>
                        <option value="Vavuniya District">Vavuniya District</option>
                        <option value="Western Province">Western Province</option>
                    </>
                )
            case "Sudan":
                return (
                    <>
                        <option value="Al Jazirah">Al Jazirah</option>
                        <option value="Al Qadarif">Al Qadarif</option>
                        <option value="Blue Nile">Blue Nile</option>
                        <option value="Central Darfur">Central Darfur</option>
                        <option value="East Darfur">East Darfur</option>
                        <option value="Kassala">Kassala</option>
                        <option value="Khartoum">Khartoum</option>
                        <option value="North Darfur">North Darfur</option>
                        <option value="North Kordofan">North Kordofan</option>
                        <option value="Northern">Northern</option>
                        <option value="Red Sea">Red Sea</option>
                        <option value="River Nile">River Nile</option>
                        <option value="Sennar">Sennar</option>
                        <option value="South Darfur">South Darfur</option>
                        <option value="South Kordofan">South Kordofan</option>
                        <option value="West Darfur">West Darfur</option>
                        <option value="West Kordofan">West Kordofan</option>
                        <option value="White Nile">White Nile</option>
                    </>
                )
            case "Suriname":
                return (
                    <>
                        <option value="Brokopondo District">Brokopondo District</option>
                        <option value="Commewijne District">Commewijne District</option>
                        <option value="Coronie District">Coronie District</option>
                        <option value="Marowijne District">Marowijne District</option>
                        <option value="Nickerie District">Nickerie District</option>
                        <option value="Para District">Para District</option>
                        <option value="Paramaribo District">Paramaribo District</option>
                        <option value="Saramacca District">Saramacca District</option>
                        <option value="Sipaliwini District">Sipaliwini District</option>
                        <option value="Wanica District">Wanica District</option>
                    </>
                )
            case "Svalbard & Jan Mayen":
                return (
                    <>
                        <option value="Svalbard & Jan Mayen">Svalbard & Jan Mayen</option>
                    </>
                )
            case "Swaziland":
                return (
                    <>
                        <option value="Hhohho District">Hhohho District</option>
                        <option value="Lubombo District">Lubombo District</option>
                        <option value="Manzini District">Manzini District</option>
                        <option value="Shiselweni District">Shiselweni District</option>
                    </>
                )
            case "Sweden":
                return (
                    <>
                        <option value="Blekinge">Blekinge</option>
                        <option value="Dalarna County">Dalarna County</option>
                        <option value="Gävleborg County">Gävleborg County</option>
                        <option value="Gotland County">Gotland County</option>
                        <option value="Halland County">Halland County</option>
                        <option value="Jönköping County">Jönköping County</option>
                        <option value="Kalmar County">Kalmar County</option>
                        <option value="Kronoberg County">Kronoberg County</option>
                        <option value="Norrbotten County">Norrbotten County</option>
                        <option value="Örebro County">Örebro County</option>
                        <option value="Östergötland County">Östergötland County</option>
                        <option value="Skåne County">Skåne County</option>
                        <option value="Södermanland County">Södermanland County</option>
                        <option value="Stockholm County">Stockholm County</option>
                        <option value="Uppsala County">Uppsala County</option>
                        <option value="Värmland County">Värmland County</option>
                        <option value="Västerbotten County">Västerbotten County</option>
                        <option value="Västernorrland County">Västernorrland County</option>
                        <option value="Västmanland County">Västmanland County</option>
                        <option value="Västra Götaland County">Västra Götaland County</option>
                    </>
                )
            case "Switzerland":
                return (
                    <>
                        <option value="Aargau">Aargau</option>
                        <option value="Appenzell Ausserrhoden">Appenzell Ausserrhoden</option>
                        <option value="Appenzell Innerrhoden">Appenzell Innerrhoden</option>
                        <option value="Basel-Landschaft">Basel-Landschaft</option>
                        <option value="canton of Bern">canton of Bern</option>
                        <option value="Canton of Fribourg">Canton of Fribourg</option>
                        <option value="Canton of Geneva">Canton of Geneva</option>
                        <option value="Canton of Jura">Canton of Jura</option>
                        <option value="Canton of Lucerne">Canton of Lucerne</option>
                        <option value="Canton of Neuchâtel">Canton of Neuchâtel</option>
                        <option value="Canton of Schaffhausen">Canton of Schaffhausen</option>
                        <option value="Canton of Solothurn">Canton of Solothurn</option>
                        <option value="Canton of St. Gallen">Canton of St. Gallen</option>
                        <option value="Canton of Valais">Canton of Valais</option>
                        <option value="Canton of Vaud">Canton of Vaud</option>
                        <option value="Canton of Zug">Canton of Zug</option>
                        <option value="canton of Zürich">canton of Zürich</option>
                        <option value="Glarus">Glarus</option>
                        <option value="Graubünden">Graubünden</option>
                        <option value="Nidwalden">Nidwalden</option>
                        <option value="Obwalden">Obwalden</option>
                        <option value="Schwyz">Schwyz</option>
                        <option value="Thurgau">Thurgau</option>
                        <option value="Ticino">Ticino</option>
                        <option value="Uri">Uri</option>
                    </>
                )
            case "Syria":
                return (
                    <>
                        <option value="Al-Hasakah Governorate">Al-Hasakah Governorate</option>
                        <option value="Al-Raqqah Governorate">Al-Raqqah Governorate</option>
                        <option value="Aleppo Governorate">Aleppo Governorate</option>
                        <option value="As-Suwayda Governorate">As-Suwayda Governorate</option>
                        <option value="Damascus Governorate">Damascus Governorate</option>
                        <option value="Daraa Governorate">Daraa Governorate</option>
                        <option value="Deir ez-Zor Governorate">Deir ez-Zor Governorate</option>
                        <option value="Hama Governorate">Hama Governorate</option>
                        <option value="Homs Governorate">Homs Governorate</option>
                        <option value="Idlib Governorate">Idlib Governorate</option>
                        <option value="Latakia Governorate">Latakia Governorate</option>
                        <option value="Quneitra Governorate">Quneitra Governorate</option>
                        <option value="Rif Dimashq Governorate">Rif Dimashq Governorate</option>
                        <option value="Tartus Governorate">Tartus Governorate</option>
                    </>
                )
            case "Tahiti":
                return (
                    <>
                        <option value="Tahiti">Tahiti</option>
                    </>
                )
            case "Taiwan":
                return (
                    <>
                        <option value="Changhua County">Changhua County</option>
                        <option value="Chiayi City">Chiayi City</option>
                        <option value="Chiayi County">Chiayi County</option>
                        <option value="Hsinchu">Hsinchu</option>
                        <option value="Hsinchu County">Hsinchu County</option>
                        <option value="Hualien County">Hualien County</option>
                        <option value="Kaohsiung">Kaohsiung</option>
                        <option value="Kaohsiung County">Kaohsiung County</option>
                        <option value="Kinmen">Kinmen</option>
                        <option value="Lienchiang County">Lienchiang County</option>
                        <option value="Miaoli County">Miaoli County</option>
                        <option value="Nantou County">Nantou County</option>
                        <option value="Penghu County">Penghu County</option>
                        <option value="Pingtung County">Pingtung County</option>
                        <option value="Taichung">Taichung</option>
                        <option value="Taichung County">Taichung County</option>
                        <option value="Tainan">Tainan</option>
                        <option value="Tainan County">Tainan County</option>
                        <option value="Taipei">Taipei</option>
                        <option value="Taitung County">Taitung County</option>
                        <option value="Taoyuan City">Taoyuan City</option>
                        <option value="Yilan County">Yilan County</option>
                        <option value="Yunlin County">Yunlin County</option>
                    </>
                )
            case "Tajikistan":
                return (
                    <>
                        <option value="districts of Republican Subordination">districts of Republican Subordination</option>
                        <option value="Gorno-Badakhshan Autonomous Province">Gorno-Badakhshan Autonomous Province</option>
                        <option value="Khatlon Province">Khatlon Province</option>
                        <option value="Sughd Province">Sughd Province</option>
                    </>
                )
            case "Tanzania":
                return (
                    <>
                        <option value="Arusha Region">Arusha Region</option>
                        <option value="Dar es Salaam Region">Dar es Salaam Region</option>
                        <option value="Dodoma Region">Dodoma Region</option>
                        <option value="Geita Region">Geita Region</option>
                        <option value="Iringa Region">Iringa Region</option>
                        <option value="Kagera Region">Kagera Region</option>
                        <option value="Katavi Region">Katavi Region</option>
                        <option value="Kigoma Region">Kigoma Region</option>
                        <option value="Kilimanjaro Region">Kilimanjaro Region</option>
                        <option value="Lindi Region">Lindi Region</option>
                        <option value="Manyara Region">Manyara Region</option>
                        <option value="Mara Region">Mara Region</option>
                        <option value="Morogoro Region">Morogoro Region</option>
                        <option value="Mtwara Region">Mtwara Region</option>
                        <option value="Mwanza Region">Mwanza Region</option>
                        <option value="Njombe Region">Njombe Region</option>
                        <option value="North Pemba Region">North Pemba Region</option>
                        <option value="Pwani Region">Pwani Region</option>
                        <option value="Rukwa Region">Rukwa Region</option>
                        <option value="Ruvuma Region">Ruvuma Region</option>
                        <option value="Shinyanga Region">Shinyanga Region</option>
                        <option value="Simiyu Region">Simiyu Region</option>
                        <option value="Singida Region">Singida Region</option>
                        <option value="South Pemba Region">South Pemba Region</option>
                        <option value="Tabora Region">Tabora Region</option>
                        <option value="Tanga Region">Tanga Region</option>
                        <option value="Zanzibar Central/South Region">Zanzibar Central/South Region</option>
                        <option value="Zanzibar North Region">Zanzibar North Region</option>
                        <option value="Zanzibar Urban/West Region">Zanzibar Urban/West Region</option>
                    </>
                )
            case "Thailand":
                return (
                    <>
                        <option value="Amnat Charoen">Amnat Charoen</option>
                        <option value="Ang Thong">Ang Thong</option>
                        <option value="Bangkok">Bangkok</option>
                        <option value="Bueng Kan">Bueng Kan</option>
                        <option value="Buri Ram">Buri Ram</option>
                        <option value="Chachoengsao">Chachoengsao</option>
                        <option value="Chai Nat">Chai Nat</option>
                        <option value="Chanthaburi">Chanthaburi</option>
                        <option value="Chiang Mai">Chiang Mai</option>
                        <option value="Chiang Rai">Chiang Rai</option>
                        <option value="Chon Buri">Chon Buri</option>
                        <option value="Chumphon">Chumphon</option>
                        <option value="Kalasin">Kalasin</option>
                        <option value="Kamphaeng Phet">Kamphaeng Phet</option>
                        <option value="Kanchanaburi">Kanchanaburi</option>
                        <option value="Khon Kaen">Khon Kaen</option>
                        <option value="Krabi">Krabi</option>
                        <option value="Lampang">Lampang</option>
                        <option value="Lamphun">Lamphun</option>
                        <option value="Loei">Loei</option>
                        <option value="Lopburi">Lopburi</option>
                        <option value="Mae Hong Son">Mae Hong Son</option>
                        <option value="Maha Sarakham">Maha Sarakham</option>
                        <option value="Mukdahan">Mukdahan</option>
                        <option value="Nakhon Nayok">Nakhon Nayok</option>
                        <option value="Nakhon Pathom">Nakhon Pathom</option>
                        <option value="Nakhon Phanom">Nakhon Phanom</option>
                        <option value="Nakhon Ratchasima">Nakhon Ratchasima</option>
                        <option value="Nakhon Sawan">Nakhon Sawan</option>
                        <option value="Nakhon Si Thammarat">Nakhon Si Thammarat</option>
                        <option value="Nan">Nan</option>
                        <option value="Narathiwat">Narathiwat</option>
                        <option value="Nong Bua Lam Phu">Nong Bua Lam Phu</option>
                        <option value="Nong Khai">Nong Khai</option>
                        <option value="Nonthaburi">Nonthaburi</option>
                        <option value="Pathum Thani">Pathum Thani</option>
                        <option value="Pattani">Pattani</option>
                        <option value="Pattaya">Pattaya</option>
                        <option value="Phang Nga">Phang Nga</option>
                        <option value="Phatthalung">Phatthalung</option>
                        <option value="Phayao">Phayao</option>
                        <option value="Phetchabun">Phetchabun</option>
                        <option value="Phetchaburi">Phetchaburi</option>
                        <option value="Phichit">Phichit</option>
                        <option value="Phitsanulok">Phitsanulok</option>
                        <option value="Phra Nakhon Si Ayutthaya">Phra Nakhon Si Ayutthaya</option>
                        <option value="Phrae">Phrae</option>
                        <option value="Phuket">Phuket</option>
                        <option value="Prachin Buri">Prachin Buri</option>
                        <option value="Prachuap Khiri Khan">Prachuap Khiri Khan</option>
                        <option value="Ranong">Ranong</option>
                        <option value="Ratchaburi">Ratchaburi</option>
                        <option value="Rayong">Rayong</option>
                        <option value="Roi Et">Roi Et</option>
                        <option value="Sa Kaeo">Sa Kaeo</option>
                        <option value="Sakon Nakhon">Sakon Nakhon</option>
                        <option value="Samut Prakan">Samut Prakan</option>
                        <option value="Samut Sakhon">Samut Sakhon</option>
                        <option value="Samut Songkhram">Samut Songkhram</option>
                        <option value="Saraburi">Saraburi</option>
                        <option value="Satun">Satun</option>
                        <option value="Si Sa Ket">Si Sa Ket</option>
                        <option value="Sing Buri">Sing Buri</option>
                        <option value="Songkhla">Songkhla</option>
                        <option value="Sukhothai">Sukhothai</option>
                        <option value="Suphanburi">Suphanburi</option>
                        <option value="Surat Thani">Surat Thani</option>
                        <option value="Surin">Surin</option>
                        <option value="Tak">Tak</option>
                        <option value="Trang">Trang</option>
                        <option value="Trat">Trat</option>
                        <option value="Ubon Ratchathani">Ubon Ratchathani</option>
                        <option value="Udon Thani">Udon Thani</option>
                        <option value="Uthai Thani">Uthai Thani</option>
                        <option value="Uttaradit">Uttaradit</option>
                        <option value="Yala">Yala</option>
                        <option value="Yasothon">Yasothon</option>
                    </>
                )
            case "Timor-Leste":
                return (
                    <>
                        <option value="Aileu municipality">Aileu municipality</option>
                        <option value="Ainaro Municipality">Ainaro Municipality</option>
                        <option value="Baucau Municipality">Baucau Municipality</option>
                        <option value="Bobonaro Municipality">Bobonaro Municipality</option>
                        <option value="Cova Lima Municipality">Cova Lima Municipality</option>
                        <option value="Dili municipality">Dili municipality</option>
                        <option value="Ermera District">Ermera District</option>
                        <option value="Lautém Municipality">Lautém Municipality</option>
                        <option value="Liquiçá Municipality">Liquiçá Municipality</option>
                        <option value="Manatuto District">Manatuto District</option>
                        <option value="Manufahi Municipality">Manufahi Municipality</option>
                        <option value="Viqueque Municipality">Viqueque Municipality</option>
                    </>
                )
            case "Togo":
                return (
                    <>
                        <option value="Centrale Region">Centrale Region</option>
                        <option value="Kara Region">Kara Region</option>
                        <option value="Maritime">Maritime</option>
                        <option value="Plateaux Region">Plateaux Region</option>
                        <option value="Savanes Region">Savanes Region</option>
                    </>
                )
            case "Tokelau":
                return (
                    <>
                        <option value="Tokelau">Tokelau</option>
                    </>
                )
            case "Tonga":
                return (
                    <>
                        <option value="Haʻapai">Haʻapai</option>
                        <option value="ʻEua">ʻEua</option>
                        <option value="Niuas">Niuas</option>
                        <option value="Tongatapu">Tongatapu</option>
                        <option value="Vavaʻu">Vavaʻu</option>
                    </>
                )
            case "Trinidad & Tobago":
                return (
                    <>
                        <option value="Arima">Arima</option>
                        <option value="Chaguanas">Chaguanas</option>
                        <option value="Couva-Tabaquite-Talparo Regional Corporation">Couva-Tabaquite-Talparo Regional Corporation</option>
                        <option value="Diego Martin Regional Corporation">Diego Martin Regional Corporation</option>
                        <option value="Eastern Tobago">Eastern Tobago</option>
                        <option value="Penal-Debe Regional Corporation">Penal-Debe Regional Corporation</option>
                        <option value="Point Fortin">Point Fortin</option>
                        <option value="Port of Spain">Port of Spain</option>
                        <option value="Princes Town Regional Corporation">Princes Town Regional Corporation</option>
                        <option value="Rio Claro-Mayaro Regional Corporation">Rio Claro-Mayaro Regional Corporation</option>
                        <option value="San Fernando">San Fernando</option>
                        <option value="San Juan-Laventille Regional Corporation">San Juan-Laventille Regional Corporation</option>
                        <option value="Sangre Grande Regional Corporation">Sangre Grande Regional Corporation</option>
                        <option value="Siparia Regional Corporation">Siparia Regional Corporation</option>
                        <option value="Tunapuna-Piarco Regional Corporation">Tunapuna-Piarco Regional Corporation</option>
                        <option value="Western Tobago">Western Tobago</option>

                    </>
                )
            case "Tunisia":
                return (
                    <>
                        <option value="Ariana Governorate">Ariana Governorate</option>
                        <option value="Ben Arous Governorate">Ben Arous Governorate</option>
                        <option value="Bizerte Governorate">Bizerte Governorate</option>
                        <option value="Gabès Governorate">Gabès Governorate</option>
                        <option value="Gafsa Governorate">Gafsa Governorate</option>
                        <option value="Jendouba Governorate">Jendouba Governorate</option>
                        <option value="Kairouan Governorate">Kairouan Governorate</option>
                        <option value="Kasserine Governorate">Kasserine Governorate</option>
                        <option value="Kassrine">Kassrine</option>
                        <option value="Kebili Governorate">Kebili Governorate</option>
                        <option value="Kef Governorate">Kef Governorate</option>
                        <option value="Mahdia Governorate">Mahdia Governorate</option>
                        <option value="Manouba Governorate">Manouba Governorate</option>
                        <option value="Medenine Governorate">Medenine Governorate</option>
                        <option value="Monastir Governorate">Monastir Governorate</option>
                        <option value="Sfax Governorate">Sfax Governorate</option>
                        <option value="Sidi Bouzid Governorate">Sidi Bouzid Governorate</option>
                        <option value="Siliana Governorate">Siliana Governorate</option>
                        <option value="Sousse Governorate">Sousse Governorate</option>
                        <option value="Tataouine Governorate">Tataouine Governorate</option>
                        <option value="Tozeur Governorate">Tozeur Governorate</option>
                        <option value="Tunis Governorate">Tunis Governorate</option>
                        <option value="Zaghouan Governorate">Zaghouan Governorate</option>
                    </>
                )
            case "Turkey":
                return (
                    <>
                        <option value="Adana Province">Adana Province</option>
                        <option value="Adıyaman Province">Adıyaman Province</option>
                        <option value="Afyonkarahisar Province">Afyonkarahisar Province</option>
                        <option value="Ağrı Province">Ağrı Province</option>
                        <option value="Aksaray Province">Aksaray Province</option>
                        <option value="Amasya Province">Amasya Province</option>
                        <option value="Ankara Province">Ankara Province</option>
                        <option value="Antalya Province">Antalya Province</option>
                        <option value="Ardahan Province">Ardahan Province</option>
                        <option value="Artvin Province">Artvin Province</option>
                        <option value="Aydın Province">Aydın Province</option>
                        <option value="Balıkesir Province">Balıkesir Province</option>
                        <option value="Bartın Province">Bartın Province</option>
                        <option value="Batman Province">Batman Province</option>
                        <option value="Bayburt Province">Bayburt Province</option>
                        <option value="Bilecik Province">Bilecik Province</option>
                        <option value="Bingöl Province">Bingöl Province</option>
                        <option value="Bitlis Province">Bitlis Province</option>
                        <option value="Bolu Province">Bolu Province</option>
                        <option value="Burdur Province">Burdur Province</option>
                        <option value="Bursa Province">Bursa Province</option>
                        <option value="Çanakkale Province">Çanakkale Province</option>
                        <option value="Çankırı Province">Çankırı Province</option>
                        <option value="Çorum Province">Çorum Province</option>
                        <option value="Denizli Province">Denizli Province</option>
                        <option value="Diyarbakır Province">Diyarbakır Province</option>
                        <option value="Düzce Province">Düzce Province</option>
                        <option value="Edirne Province">Edirne Province</option>
                        <option value="Elazığ Province">Elazığ Province</option>
                        <option value="Erzincan Province">Erzincan Province</option>
                        <option value="Erzurum Province">Erzurum Province</option>
                        <option value="Eskişehir Province">Eskişehir Province</option>
                        <option value="Gaziantep Province">Gaziantep Province</option>
                        <option value="Giresun Province">Giresun Province</option>
                        <option value="Gümüşhane Province">Gümüşhane Province</option>
                        <option value="Hakkâri Province">Hakkâri Province</option>
                        <option value="Hatay Province">Hatay Province</option>
                        <option value="Iğdır Province">Iğdır Province</option>
                        <option value="Isparta Province">Isparta Province</option>
                        <option value="Istanbul Province">Istanbul Province</option>
                        <option value="İzmir Province">İzmir Province</option>
                        <option value="Kahramanmaraş Province">Kahramanmaraş Province</option>
                        <option value="Karabük Province">Karabük Province</option>
                        <option value="Karaman Province">Karaman Province</option>
                        <option value="Kars Province">Kars Province</option>
                        <option value="Kastamonu Province">Kastamonu Province</option>
                        <option value="Kayseri Province">Kayseri Province</option>
                        <option value="Kilis Province">Kilis Province</option>
                        <option value="Kırıkkale Province">Kırıkkale Province</option>
                        <option value="Kırklareli Province">Kırklareli Province</option>
                        <option value="Kırşehir Province">Kırşehir Province</option>
                        <option value="Kocaeli Province">Kocaeli Province</option>
                        <option value="Konya Province">Konya Province</option>
                        <option value="Kütahya Province">Kütahya Province</option>
                        <option value="Malatya Province">Malatya Province</option>
                        <option value="Manisa Province">Manisa Province</option>
                        <option value="Mardin Province">Mardin Province</option>
                        <option value="Mersin Province">Mersin Province</option>
                        <option value="Muğla Province">Muğla Province</option>
                        <option value="Muş Province">Muş Province</option>
                        <option value="Nevşehir Province">Nevşehir Province</option>
                        <option value="Niğde Province">Niğde Province</option>
                        <option value="Ordu Province">Ordu Province</option>
                        <option value="Osmaniye Province">Osmaniye Province</option>
                        <option value="Rize Province">Rize Province</option>
                        <option value="Sakarya Province">Sakarya Province</option>
                        <option value="Samsun Province">Samsun Province</option>
                        <option value="Şanlıurfa Province">Şanlıurfa Province</option>
                        <option value="Siirt Province">Siirt Province</option>
                        <option value="Sinop Province">Sinop Province</option>
                        <option value="Sivas Province">Sivas Province</option>
                        <option value="Şırnak Province">Şırnak Province</option>
                        <option value="Tekirdağ Province">Tekirdağ Province</option>
                        <option value="Tokat Province">Tokat Province</option>
                        <option value="Trabzon Province">Trabzon Province</option>
                        <option value="Tunceli Province">Tunceli Province</option>
                        <option value="Uşak Province">Uşak Province</option>
                        <option value="Van Province">Van Province</option>
                        <option value="Yalova Province">Yalova Province</option>
                        <option value="Yozgat Province">Yozgat Province</option>
                        <option value="Zonguldak Province">Zonguldak Province</option>
                    </>
                )
            case "Turkmenistan":
                return (
                    <>
                        <option value="Ahal Region">Ahal Region</option>
                        <option value="Ashgabat">Ashgabat</option>
                        <option value="Balkan Region">Balkan Region</option>
                        <option value="Daşoguz Region">Daşoguz Region</option>
                        <option value="Lebap Region">Lebap Region</option>
                        <option value="Mary Region">Mary Region</option>
                    </>
                )
            case "Turks & Caicos Islands":
                return (
                    <>
                        <option value="Turks & Caicos Islands">Turks & Caicos Islands</option>
                    </>
                )
            case "Tuvalu":
                return (
                    <>
                        <option value="Funafuti">Funafuti</option>
                        <option value="Nanumanga">Nanumanga</option>
                        <option value="Nanumea">Nanumea</option>
                        <option value="Niutao Island Council">Niutao Island Council</option>
                        <option value="Nui">Nui</option>
                        <option value="Nukufetau">Nukufetau</option>
                        <option value="Nukulaelae">Nukulaelae</option>
                        <option value="Vaitupu">Vaitupu</option>
                    </>
                )
            case "Uganda":
                return (
                    <>
                        <option value="Abim District">Abim District</option>
                        <option value="Adjumani District">Adjumani District</option>
                        <option value="Agago District">Agago District</option>
                        <option value="Alebtong District">Alebtong District</option>
                        <option value="Amolatar District">Amolatar District</option>
                        <option value="Amudat District">Amudat District</option>
                        <option value="Amuria District">Amuria District</option>
                        <option value="Amuru District">Amuru District</option>
                        <option value="Apac District">Apac District</option>
                        <option value="Arua District">Arua District</option>
                        <option value="Budaka District">Budaka District</option>
                        <option value="Bududa District">Bududa District</option>
                        <option value="Bugiri District">Bugiri District</option>
                        <option value="Buhweju District">Buhweju District</option>
                        <option value="Buikwe District">Buikwe District</option>
                        <option value="Bukedea District">Bukedea District</option>
                        <option value="Bukomansimbi District">Bukomansimbi District</option>
                        <option value="Bukwo District">Bukwo District</option>
                        <option value="Bulambuli District">Bulambuli District</option>
                        <option value="Buliisa District">Buliisa District</option>
                        <option value="Bundibugyo District">Bundibugyo District</option>
                        <option value="Bunyangabu District">Bunyangabu District</option>
                        <option value="Bushenyi District">Bushenyi District</option>
                        <option value="Busia District">Busia District</option>
                        <option value="Butaleja District">Butaleja District</option>
                        <option value="Butambala District">Butambala District</option>
                        <option value="Butebo District">Butebo District</option>
                        <option value="Buvuma District">Buvuma District</option>
                        <option value="Buyende District">Buyende District</option>
                        <option value="Central Region">Central Region</option>
                        <option value="Dokolo District">Dokolo District</option>
                        <option value="Eastern Region">Eastern Region</option>
                        <option value="Gomba District">Gomba District</option>
                        <option value="Gulu District">Gulu District</option>
                        <option value="Ibanda District">Ibanda District</option>
                        <option value="Iganga District">Iganga District</option>
                        <option value="Isingiro District">Isingiro District</option>
                        <option value="Jinja District">Jinja District</option>
                        <option value="Kaabong District">Kaabong District</option>
                        <option value="Kabale District">Kabale District</option>
                        <option value="Kabarole District">Kabarole District</option>
                        <option value="Kaberamaido District">Kaberamaido District</option>
                        <option value="Kagadi District">Kagadi District</option>
                        <option value="Kakumiro District">Kakumiro District</option>
                        <option value="Kalangala District">Kalangala District</option>
                        <option value="Kaliro District">Kaliro District</option>
                        <option value="Kalungu District">Kalungu District</option>
                        <option value="Kampala District">Kampala District</option>
                        <option value="Kamuli District">Kamuli District</option>
                        <option value="Kamwenge District">Kamwenge District</option>
                        <option value="Kanungu District">Kanungu District</option>
                        <option value="Kapchorwa District">Kapchorwa District</option>
                        <option value="Kasese District">Kasese District</option>
                        <option value="Katakwi District">Katakwi District</option>
                        <option value="Kayunga District">Kayunga District</option>
                        <option value="Kibaale District">Kibaale District</option>
                        <option value="Kiboga District">Kiboga District</option>
                        <option value="Kibuku District">Kibuku District</option>
                        <option value="Kiruhura District">Kiruhura District</option>
                        <option value="Kiryandongo District">Kiryandongo District</option>
                        <option value="Kisoro District">Kisoro District</option>
                        <option value="Kitgum District">Kitgum District</option>
                        <option value="Koboko District">Koboko District</option>
                        <option value="Kole District">Kole District</option>
                        <option value="Kotido District">Kotido District</option>
                        <option value="Kumi District">Kumi District</option>
                        <option value="Kween District">Kween District</option>
                        <option value="Kyankwanzi District">Kyankwanzi District</option>
                        <option value="Kyegegwa District">Kyegegwa District</option>
                        <option value="Kyenjojo District">Kyenjojo District</option>
                        <option value="Kyotera District">Kyotera District</option>
                        <option value="Lamwo District">Lamwo District</option>
                        <option value="Lira District">Lira District</option>
                        <option value="Luuka District">Luuka District</option>
                        <option value="Luwero District">Luwero District</option>
                        <option value="Lwengo District">Lwengo District</option>
                        <option value="Lyantonde District">Lyantonde District</option>
                        <option value="Manafwa District">Manafwa District</option>
                        <option value="Maracha District">Maracha District</option>
                        <option value="Masaka District">Masaka District</option>
                        <option value="Masindi District">Masindi District</option>
                        <option value="Mayuge District">Mayuge District</option>
                        <option value="Mbale District">Mbale District</option>
                        <option value="Mbarara District">Mbarara District</option>
                        <option value="Mitooma District">Mitooma District</option>
                        <option value="Mityana District">Mityana District</option>
                        <option value="Moroto District">Moroto District</option>
                        <option value="Moyo District">Moyo District</option>
                        <option value="Mpigi District">Mpigi District</option>
                        <option value="Mubende District">Mubende District</option>
                        <option value="Mukono District">Mukono District</option>
                        <option value="Nakapiripirit District">Nakapiripirit District</option>
                        <option value="Nakaseke District">Nakaseke District</option>
                        <option value="Nakasongola District">Nakasongola District</option>
                        <option value="Namayingo District">Namayingo District</option>
                        <option value="Namisindwa District">Namisindwa District</option>
                        <option value="Namutumba District">Namutumba District</option>
                        <option value="Napak District">Napak District</option>
                        <option value="Nebbi District">Nebbi District</option>
                        <option value="Ngora District">Ngora District</option>
                        <option value="Northern Region">Northern Region</option>
                        <option value="Ntoroko District">Ntoroko District</option>
                        <option value="Ntungamo District">Ntungamo District</option>
                        <option value="Nwoya District">Nwoya District</option>
                        <option value="Omoro District">Omoro District</option>
                        <option value="Otuke District">Otuke District</option>
                        <option value="Oyam District">Oyam District</option>
                        <option value="Pader District">Pader District</option>
                        <option value="Pakwach District">Pakwach District</option>
                        <option value="Pallisa District">Pallisa District</option>
                        <option value="Rakai District">Rakai District</option>
                        <option value="Rubanda District">Rubanda District</option>
                        <option value="Rubirizi District">Rubirizi District</option>
                        <option value="Rukiga District">Rukiga District</option>
                        <option value="Rukungiri District">Rukungiri District</option>
                        <option value="Sembabule District">Sembabule District</option>
                        <option value="Serere District">Serere District</option>
                        <option value="Sheema District">Sheema District</option>
                        <option value="Sironko District">Sironko District</option>
                        <option value="Soroti District">Soroti District</option>
                        <option value="Tororo District">Tororo District</option>
                        <option value="Wakiso District">Wakiso District</option>
                        <option value="Western Region">Western Region</option>
                        <option value="Yumbe District">Yumbe District</option>
                        <option value="Zombo District">Zombo District</option>
                    </>
                )
            case "Ukraine":
                return (
                    <>
                        <option value="Autonomous Republic of Crimea">Autonomous Republic of Crimea</option>
                        <option value="Cherkasy Oblast">Cherkasy Oblast</option>
                        <option value="Chernihiv Oblast">Chernihiv Oblast</option>
                        <option value="Chernivtsi Oblast">Chernivtsi Oblast</option>
                        <option value="Dnipropetrovsk Oblast">Dnipropetrovsk Oblast</option>
                        <option value="Donetsk Oblast">Donetsk Oblast</option>
                        <option value="Ivano-Frankivsk Oblast">Ivano-Frankivsk Oblast</option>
                        <option value="Kharkiv Oblast">Kharkiv Oblast</option>
                        <option value="Kherson Oblast">Kherson Oblast</option>
                        <option value="Khmelnytsky Oblast">Khmelnytsky Oblast</option>
                        <option value="Kiev">Kiev</option>
                        <option value="Kirovohrad Oblast">Kirovohrad Oblast</option>
                        <option value="Kyiv Oblast">Kyiv Oblast</option>
                        <option value="Luhansk Oblast">Luhansk Oblast</option>
                        <option value="Lviv Oblast">Lviv Oblast</option>
                        <option value="Mykolaiv Oblast">Mykolaiv Oblast</option>
                        <option value="Odessa Oblast">Odessa Oblast</option>
                        <option value="Rivne Oblast">Rivne Oblast</option>
                        <option value="Sumy Oblast">Sumy Oblast</option>
                        <option value="Ternopil Oblast">Ternopil Oblast</option>
                        <option value="Vinnytsia Oblast">Vinnytsia Oblast</option>
                        <option value="Volyn Oblast">Volyn Oblast</option>
                        <option value="Zakarpattia Oblast">Zakarpattia Oblast</option>
                        <option value="Zaporizhzhya Oblast">Zaporizhzhya Oblast</option>
                        <option value="Zhytomyr Oblast">Zhytomyr Oblast</option>
                    </>
                )
            case "United Arab Emirates":
                return (
                    <>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Fujairah">Fujairah</option>
                        <option value="Ras al-Khaimah">Ras al-Khaimah</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Umm al-Quwain">Umm al-Quwain</option>
                    </>
                )
            case "United Kingdom":
                return (
                    <>
                        <option value="London, City of">London, City of</option>
                        <option value="Aberdeen City">Aberdeen City</option>
                        <option value="Aberdeenshire">Aberdeenshire</option>
                        <option value="Angus">Angus</option>
                        <option value="Argyll and Bute">Argyll and Bute</option>
                        <option value="Clackmannanshire">Clackmannanshire</option>
                        <option value="Dumfries and Galloway">Dumfries and Galloway</option>
                        <option value="Dundee City">Dundee City</option>
                        <option value="East Ayrshire">East Ayrshire</option>
                        <option value="East Dunbartonshire">East Dunbartonshire</option>
                        <option value="East Lothian">East Lothian</option>
                        <option value="East Renfrewshire">East Renfrewshire</option>
                        <option value="Edinburgh, City of">Edinburgh, City of</option>
                        <option value="Eilean Siar">Eilean Siar</option>
                        <option value="Falkirk">Falkirk</option>
                        <option value="Fife">Fife</option>
                        <option value="Glasgow City">Glasgow City</option>
                        <option value="Highland">Highland</option>
                        <option value="Inverclyde">Inverclyde</option>
                        <option value="Midlothian">Midlothian</option>
                        <option value="Moray">Moray</option>
                        <option value="North Ayrshire">North Ayrshire</option>
                        <option value="North Lanarkshire">North Lanarkshire</option>
                        <option value="Orkney Islands">Orkney Islands</option>
                        <option value="Perth and Kinross">Perth and Kinross</option>
                        <option value="Renfrewshire">Renfrewshire</option>
                        <option value="Scottish Borders">Scottish Borders</option>
                        <option value="Shetland Islands">Shetland Islands</option>
                        <option value="South Ayrshire">South Ayrshire</option>
                        <option value="South Lanarkshire">South Lanarkshire</option>
                        <option value="Stirling">Stirling</option>
                        <option value="West Dunbartonshire">West Dunbartonshire</option>
                        <option value="West Lothian">West Lothian</option>
                        <option value="Antrim and Newtownabbey">Antrim and Newtownabbey</option>
                        <option value="Ards and North Down">Ards and North Down</option>
                        <option value="Armagh City, Banbridge and Craigavon">Armagh City, Banbridge and Craigavon</option>
                        <option value="Belfast City">Belfast City</option>
                        <option value="Causeway Coast and Glens">Causeway Coast and Glens</option>
                        <option value="Derry and Strabane">Derry and Strabane</option>
                        <option value="Fermanagh and Omagh">Fermanagh and Omagh</option>
                        <option value="Lisburn and Castlereagh">Lisburn and Castlereagh</option>
                        <option value="Mid and East Antrim">Mid and East Antrim</option>
                        <option value="Mid-Ulster">Mid-Ulster</option>
                        <option value="Newry, Mourne and Down">Newry, Mourne and Down</option>
                        <option value="Barking and Dagenham">Barking and Dagenham</option>
                        <option value="Barnet">Barnet</option>
                        <option value="Bexley">Bexley</option>
                        <option value="Brent">Brent</option>
                        <option value="Bromley">Bromley</option>
                        <option value="Camden">Camden</option>
                        <option value="Croydon">Croydon</option>
                        <option value="Ealing">Ealing</option>
                        <option value="Enfield">Enfield</option>
                        <option value="Greenwich">Greenwich</option>
                        <option value="Hackney">Hackney</option>
                        <option value="Hammersmith and Fulham">Hammersmith and Fulham</option>
                        <option value="Haringey">Haringey</option>
                        <option value="Harrow">Harrow</option>
                        <option value="Havering">Havering</option>
                        <option value="Hillingdon">Hillingdon</option>
                        <option value="Hounslow">Hounslow</option>
                        <option value="Islington">Islington</option>
                        <option value="Kensington and Chelsea">Kensington and Chelsea</option>
                        <option value="Kingston upon Thames">Kingston upon Thames</option>
                        <option value="Lambeth">Lambeth</option>
                        <option value="Lewisham">Lewisham</option>
                        <option value="Merton">Merton</option>
                        <option value="Newham">Newham</option>
                        <option value="Redbridge">Redbridge</option>
                        <option value="Richmond upon Thames">Richmond upon Thames</option>
                        <option value="Southwark">Southwark</option>
                        <option value="Sutton">Sutton</option>
                        <option value="Tower Hamlets">Tower Hamlets</option>
                        <option value="Waltham Forest">Waltham Forest</option>
                        <option value="Wandsworth">Wandsworth</option>
                        <option value="Westminster">Westminster</option>
                        <option value="Barnsley">Barnsley</option>
                        <option value="Birmingham">Birmingham</option>
                        <option value="Bolton">Bolton</option>
                        <option value="Bradford">Bradford</option>
                        <option value="Bury">Bury</option>
                        <option value="Calderdale">Calderdale</option>
                        <option value="Coventry">Coventry</option>
                        <option value="Doncaster">Doncaster</option>
                        <option value="Dudley">Dudley</option>
                        <option value="Gateshead">Gateshead</option>
                        <option value="Kirklees">Kirklees</option>
                        <option value="Knowsley">Knowsley</option>
                        <option value="Leeds">Leeds</option>
                        <option value="Liverpool">Liverpool</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Newcastle upon Tyne">Newcastle upon Tyne</option>
                        <option value="North Tyneside">North Tyneside</option>
                        <option value="Oldham">Oldham</option>
                        <option value="Rochdale">Rochdale</option>
                        <option value="Rotherham">Rotherham</option>
                        <option value="Salford">Salford</option>
                        <option value="Sandwell">Sandwell</option>
                        <option value="Sefton">Sefton</option>
                        <option value="Sheffield">Sheffield</option>
                        <option value="Solihull">Solihull</option>
                        <option value="South Tyneside">South Tyneside</option>
                        <option value="St. Helens">St. Helens</option>
                        <option value="Stockport">Stockport</option>
                        <option value="Sunderland">Sunderland</option>
                        <option value="Tameside">Tameside</option>
                        <option value="Trafford">Trafford</option>
                        <option value="Wakefield">Wakefield</option>
                        <option value="Walsall">Walsall</option>
                        <option value="Wigan">Wigan</option>
                        <option value="Wirral">Wirral</option>
                        <option value="Wolverhampton">Wolverhampton</option>
                        <option value="Buckinghamshire">Buckinghamshire</option>
                        <option value="Cambridgeshire">Cambridgeshire</option>
                        <option value="Cumbria">Cumbria</option>
                        <option value="Derbyshire">Derbyshire</option>
                        <option value="Devon">Devon</option>
                        <option value="Dorset">Dorset</option>
                        <option value="East Sussex">East Sussex</option>
                        <option value="Essex">Essex</option>
                        <option value="Gloucestershire">Gloucestershire</option>
                        <option value="Hampshire">Hampshire</option>
                        <option value="Hertfordshire">Hertfordshire</option>
                        <option value="Kent">Kent</option>
                        <option value="Lancashire">Lancashire</option>
                        <option value="Leicestershire">Leicestershire</option>
                        <option value="Lincolnshire">Lincolnshire</option>
                        <option value="Norfolk">Norfolk</option>
                        <option value="North Yorkshire">North Yorkshire</option>
                        <option value="Northamptonshire">Northamptonshire</option>
                        <option value="Nottinghamshire">Nottinghamshire</option>
                        <option value="Oxfordshire">Oxfordshire</option>
                        <option value="Somerset">Somerset</option>
                        <option value="Staffordshire">Staffordshire</option>
                        <option value="Suffolk">Suffolk</option>
                        <option value="Surrey">Surrey</option>
                        <option value="Warwickshire">Warwickshire</option>
                        <option value="West Sussex">West Sussex</option>
                        <option value="Worcestershire">Worcestershire</option>
                        <option value="Bath and North East Somerset">Bath and North East Somerset</option>
                        <option value="Bedford">Bedford</option>
                        <option value="Blackburn with Darwen">Blackburn with Darwen</option>
                        <option value="Blackpool">Blackpool</option>
                        <option value="Blaenau Gwent">Blaenau Gwent</option>
                        <option value="Bournemouth, Christchurch and Poole">Bournemouth, Christchurch and Poole</option>
                        <option value="Bracknell Forest">Bracknell Forest</option>
                        <option value="Bridgend [Pen-y-bont ar Ogwr GB-POG]">Bridgend [Pen-y-bont ar Ogwr GB-POG]</option>
                        <option value="Brighton and Hove">Brighton and Hove</option>
                        <option value="Bristol, City of">Bristol, City of</option>
                        <option value="Caerphilly [Caerffili GB-CAF]">Caerphilly [Caerffili GB-CAF]</option>
                        <option value="Cardiff [Caerdydd GB-CRD]">Cardiff [Caerdydd GB-CRD]</option>
                        <option value="Carmarthenshire [Sir Gaerfyrddin GB-GFY]">Carmarthenshire [Sir Gaerfyrddin GB-GFY]</option>
                        <option value="Central Bedfordshire">Central Bedfordshire</option>
                        <option value="Ceredigion [Sir Ceredigion]">Ceredigion [Sir Ceredigion]</option>
                        <option value="Cheshire East">Cheshire East</option>
                        <option value="Cheshire West and Chester">Cheshire West and Chester</option>
                        <option value="Conwy">Conwy</option>
                        <option value="Cornwall">Cornwall</option>
                        <option value="Darlington">Darlington</option>
                        <option value="Denbighshire [Sir Ddinbych GB-DDB]">Denbighshire [Sir Ddinbych GB-DDB]</option>
                        <option value="Derby">Derby</option>
                        <option value="Durham, County">Durham, County</option>
                        <option value="East Riding of Yorkshire">East Riding of Yorkshire</option>
                        <option value="Flintshire [Sir y Fflint GB-FFL]">Flintshire [Sir y Fflint GB-FFL]</option>
                        <option value="Gwynedd">Gwynedd</option>
                        <option value="Halton">Halton</option>
                        <option value="Hartlepool">Hartlepool</option>
                        <option value="Herefordshire">Herefordshire</option>
                        <option value="Isle of Anglesey [Sir Ynys Môn GB-YNM]">Isle of Anglesey [Sir Ynys Môn GB-YNM]</option>
                        <option value="Isle of Wight">Isle of Wight</option>
                        <option value="Isles of Scilly">Isles of Scilly</option>
                        <option value="Kingston upon Hull">Kingston upon Hull</option>
                        <option value="Leicester">Leicester</option>
                        <option value="Luton">Luton</option>
                        <option value="Medway">Medway</option>
                        <option value="Merthyr Tydfil [Merthyr Tudful GB-MTU]">Merthyr Tydfil [Merthyr Tudful GB-MTU]</option>
                        <option value="Middlesbrough">Middlesbrough</option>
                        <option value="Milton Keynes">Milton Keynes</option>
                        <option value="Monmouthshire [Sir Fynwy GB-FYN]">Monmouthshire [Sir Fynwy GB-FYN]</option>
                        <option value="Neath Port Talbot [Castell-nedd Port Talbot GB-CTL]">Neath Port Talbot [Castell-nedd Port Talbot GB-CTL]</option>
                        <option value="Newport [Casnewydd GB-CNW]">Newport [Casnewydd GB-CNW]</option>
                        <option value="North East Lincolnshire">North East Lincolnshire</option>
                        <option value="North Lincolnshire">North Lincolnshire</option>
                        <option value="North Somerset">North Somerset</option>
                        <option value="Northumberland">Northumberland</option>
                        <option value="Nottingham">Nottingham</option>
                        <option value="Pembrokeshire [Sir Benfro GB-BNF]">Pembrokeshire [Sir Benfro GB-BNF]</option>
                        <option value="Peterborough">Peterborough</option>
                        <option value="Plymouth">Plymouth</option>
                        <option value="Portsmouth">Portsmouth</option>
                        <option value="Powys">Powys</option>
                        <option value="Reading">Reading</option>
                        <option value="Redcar and Cleveland">Redcar and Cleveland</option>
                        <option value="Rhondda Cynon Taff [Rhondda CynonTaf]">Rhondda Cynon Taff [Rhondda CynonTaf]</option>
                        <option value="Rutland">Rutland</option>
                        <option value="Shropshire">Shropshire</option>
                        <option value="Slough">Slough</option>
                        <option value="South Gloucestershire">South Gloucestershire</option>
                        <option value="Southampton">Southampton</option>
                        <option value="Southend-on-Sea">Southend-on-Sea</option>
                        <option value="Stockton-on-Tees">Stockton-on-Tees</option>
                        <option value="Stoke-on-Trent">Stoke-on-Trent</option>
                        <option value="Swansea [Abertawe GB-ATA]">Swansea [Abertawe GB-ATA]</option>
                        <option value="Swindon">Swindon</option>
                        <option value="Telford and Wrekin">Telford and Wrekin</option>
                        <option value="Thurrock">Thurrock</option>
                        <option value="Torbay">Torbay</option>
                        <option value="Torfaen [Tor-faen]">Torfaen [Tor-faen]</option>
                        <option value="Vale of Glamorgan, The [Bro Morgannwg GB-BMG]">Vale of Glamorgan, The [Bro Morgannwg GB-BMG]</option>
                        <option value="Warrington">Warrington</option>
                        <option value="West Berkshire">West Berkshire</option>
                        <option value="Wiltshire">Wiltshire</option>
                        <option value="Windsor and Maidenhead">Windsor and Maidenhead</option>
                        <option value="Wokingham">Wokingham</option>
                        <option value="Wrexham [Wrecsam GB-WRC]">Wrexham [Wrecsam GB-WRC]</option>
                        <option value="York">York</option>
                    </>
                )
            case "United States of America":
                return (
                    <>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="Baker Island">Baker Island</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District of Columbia">District of Columbia</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Guam">Guam</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Howland Island">Howland Island</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Jarvis Island">Jarvis Island</option>
                        <option value="Johnston Atoll">Johnston Atoll</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Kingman Reef">Kingman Reef</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Midway Atoll">Midway Atoll</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Navassa Island">Navassa Island</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Palmyra Atoll">Palmyra Atoll</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                        <option value="United States Virgin Islands">United States Virgin Islands</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Wake Island">Wake Island</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                    </>
                )
            case "United States Minor Outlying Islands":
                return (
                    <>
                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                    </>
                )
            case "Uruguay":
                return (
                    <>
                        <option value="Artigas Department">Artigas Department</option>
                        <option value="Canelones Department">Canelones Department</option>
                        <option value="Cerro Largo Department">Cerro Largo Department</option>
                        <option value="Colonia Department">Colonia Department</option>
                        <option value="Durazno Department">Durazno Department</option>
                        <option value="Flores Department">Flores Department</option>
                        <option value="Florida Department">Florida Department</option>
                        <option value="Lavalleja Department">Lavalleja Department</option>
                        <option value="Maldonado Department">Maldonado Department</option>
                        <option value="Montevideo Department">Montevideo Department</option>
                        <option value="Paysandú Department">Paysandú Department</option>
                        <option value="Río Negro Department">Río Negro Department</option>
                        <option value="Rivera Department">Rivera Department</option>
                        <option value="Rocha Department">Rocha Department</option>
                        <option value="Salto Department">Salto Department</option>
                        <option value="San José Department">San José Department</option>
                        <option value="Soriano Department">Soriano Department</option>
                        <option value="Tacuarembó Department">Tacuarembó Department</option>
                        <option value="Treinta y Tres Department">Treinta y Tres Department</option>
                    </>
                )
            case "Uzbekistan":
                return (
                    <>
                        <option value="Andijan Region">Andijan Region</option>
                        <option value="Bukhara Region">Bukhara Region</option>
                        <option value="Fergana Region">Fergana Region</option>
                        <option value="Jizzakh Region">Jizzakh Region</option>
                        <option value="Karakalpakstan">Karakalpakstan</option>
                        <option value="Namangan Region">Namangan Region</option>
                        <option value="Navoiy Region">Navoiy Region</option>
                        <option value="Qashqadaryo Region">Qashqadaryo Region</option>
                        <option value="Samarqand Region">Samarqand Region</option>
                        <option value="Sirdaryo Region">Sirdaryo Region</option>
                        <option value="Surxondaryo Region">Surxondaryo Region</option>
                        <option value="Tashkent">Tashkent</option>
                        <option value="Tashkent Region">Tashkent Region</option>
                        <option value="Xorazm Region">Xorazm Region</option>
                    </>
                )
            case "Vanuatu":
                return (
                    <>
                        <option value="Malampa">Malampa</option>
                        <option value="Penama">Penama</option>
                        <option value="Sanma">Sanma</option>
                        <option value="Shefa">Shefa</option>
                        <option value="Tafea">Tafea</option>
                        <option value="Torba">Torba</option>
                    </>
                )
            case "Vatican SCty State":
                return (
                    <>
                        <option value="Vatican City State">Vatican City State</option>
                    </>
                )
            case "Venezuela":
                return (
                    <>
                        <option value="Amazonas">Amazonas</option>
                        <option value="Anzoátegui">Anzoátegui</option>
                        <option value="Apure">Apure</option>
                        <option value="Aragua">Aragua</option>
                        <option value="Barinas">Barinas</option>
                        <option value="Bolívar">Bolívar</option>
                        <option value="Capital District">Capital District</option>
                        <option value="Carabobo">Carabobo</option>
                        <option value="Cojedes">Cojedes</option>
                        <option value="Delta Amacuro">Delta Amacuro</option>
                        <option value="Falcón">Falcón</option>
                        <option value="Federal Dependencies of Venezuela">Federal Dependencies of Venezuela</option>
                        <option value="Guárico">Guárico</option>
                        <option value="Lara">Lara</option>
                        <option value="Mérida">Mérida</option>
                        <option value="Miranda">Miranda</option>
                        <option value="Monagas">Monagas</option>
                        <option value="Nueva Esparta">Nueva Esparta</option>
                        <option value="Portuguesa">Portuguesa</option>
                        <option value="Sucre">Sucre</option>
                        <option value="Táchira">Táchira</option>
                        <option value="Trujillo">Trujillo</option>
                        <option value="Vargas">Vargas</option>
                        <option value="Yaracuy">Yaracuy</option>
                        <option value="Zulia">Zulia</option>
                    </>
                )
            case "Vietnam":
                return (
                    <>
                        <option value="An Giang">An Giang</option>
                        <option value="Bà Rịa-Vũng Tàu">Bà Rịa-Vũng Tàu</option>
                        <option value="Bắc Giang">Bắc Giang</option>
                        <option value="Bắc Kạn">Bắc Kạn</option>
                        <option value="Bạc Liêu">Bạc Liêu</option>
                        <option value="Bắc Ninh">Bắc Ninh</option>
                        <option value="Bến Tre">Bến Tre</option>
                        <option value="Bình Dương">Bình Dương</option>
                        <option value="Bình Định">Bình Định</option>
                        <option value="Bình Phước">Bình Phước</option>
                        <option value="Bình Thuận">Bình Thuận</option>
                        <option value="Cà Mau">Cà Mau</option>
                        <option value="Cao Bằng">Cao Bằng</option>
                        <option value="Da Nang">Da Nang</option>
                        <option value="Đắk Lắk">Đắk Lắk</option>
                        <option value="Đắk Nông">Đắk Nông</option>
                        <option value="Điện Biên">Điện Biên</option>
                        <option value="Đồng Nai">Đồng Nai</option>
                        <option value="Đồng Tháp">Đồng Tháp</option>
                        <option value="Gia Lai">Gia Lai</option>
                        <option value="Hà Giang">Hà Giang</option>
                        <option value="Hà Nam">Hà Nam</option>
                        <option value="Hà Tây">Hà Tây</option>
                        <option value="Hà Tĩnh">Hà Tĩnh</option>
                        <option value="Hải Dương">Hải Dương</option>
                        <option value="Haiphong">Haiphong</option>
                        <option value="Hanoi">Hanoi</option>
                        <option value="Hậu Giang">Hậu Giang</option>
                        <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                        <option value="Hòa Bình">Hòa Bình</option>
                        <option value="Hưng Yên">Hưng Yên</option>
                        <option value="Khánh Hòa">Khánh Hòa</option>
                        <option value="Kiên Giang">Kiên Giang</option>
                        <option value="Kon Tum">Kon Tum</option>
                        <option value="Lai Châu">Lai Châu</option>
                        <option value="Lâm Đồng">Lâm Đồng</option>
                        <option value="Lạng Sơn">Lạng Sơn</option>
                        <option value="Lào Cai">Lào Cai</option>
                        <option value="Long An">Long An</option>
                        <option value="Nam Định">Nam Định</option>
                        <option value="Nghệ An">Nghệ An</option>
                        <option value="Ninh Bình">Ninh Bình</option>
                        <option value="Ninh Thuận">Ninh Thuận</option>
                        <option value="Phú Thọ">Phú Thọ</option>
                        <option value="Phú Yên">Phú Yên</option>
                        <option value="Quảng Bình">Quảng Bình</option>
                        <option value="Quảng Nam">Quảng Nam</option>
                        <option value="Quảng Ngãi">Quảng Ngãi</option>
                        <option value="Quảng Ninh">Quảng Ninh</option>
                        <option value="Quảng Trị">Quảng Trị</option>
                        <option value="Sóc Trăng">Sóc Trăng</option>
                        <option value="Sơn La">Sơn La</option>
                        <option value="Tây Ninh">Tây Ninh</option>
                        <option value="Thái Bình">Thái Bình</option>
                        <option value="Thái Nguyên">Thái Nguyên</option>
                        <option value="Thanh Hóa">Thanh Hóa</option>
                        <option value="Thừa Thiên-Huế">Thừa Thiên-Huế</option>
                        <option value="Tiền Giang">Tiền Giang</option>
                        <option value="Trà Vinh">Trà Vinh</option>
                        <option value="Tuyên Quang">Tuyên Quang</option>
                        <option value="Vĩnh Long">Vĩnh Long</option>
                        <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                        <option value="Yên Bái">Yên Bái</option>
                    </>
                )
            case "Virgin Islands (Brit)":
                return (
                    <>
                        <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                    </>
                )
            case "Virgin Islands (USA)":
                return (
                    <>
                        <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                    </>
                )
            case "Wake Island":
                return (
                    <>
                        <option value="Wake Island">Wake Island</option>
                    </>
                )
            case "Wallis & Futana":
                return (
                    <>
                        <option value="Wallis & Futana">Wallis & Futana</option>
                    </>
                )
            case "Western Sahara":
                return (
                    <>
                        <option value="Western Sahara">Western Sahara</option>
                    </>
                )
            case "Yemen":
                return (
                    <>
                        <option value="'Adan Governorate">'Adan Governorate</option>
                        <option value="'Amran Governorate">'Amran Governorate</option>
                        <option value="Abyan Governorate">Abyan Governorate</option>
                        <option value="Al Bayda' Governorate">Al Bayda' Governorate</option>
                        <option value="Al Hudaydah Governorate">Al Hudaydah Governorate</option>
                        <option value="Al Jawf Governorate">Al Jawf Governorate</option>
                        <option value="Al Mahrah Governorate">Al Mahrah Governorate</option>
                        <option value="Al Mahwit Governorate">Al Mahwit Governorate</option>
                        <option value="Dhamar Governorate">Dhamar Governorate</option>
                        <option value="Hadhramaut Governorate">Hadhramaut Governorate</option>
                        <option value="Hajjah Governorate">Hajjah Governorate</option>
                        <option value="Ibb Governorate">Ibb Governorate</option>
                        <option value="Lahij Governorate">Lahij Governorate</option>
                        <option value="Ma'rib Governorate">Ma'rib Governorate</option>
                        <option value="Raymah Governorate">Raymah Governorate</option>
                        <option value="Saada Governorate">Saada Governorate</option>
                        <option value="Sana'a">Sana'a</option>
                        <option value="Sana'a Governorate">Sana'a Governorate</option>
                        <option value="Shabwah Governorate">Shabwah Governorate</option>
                        <option value="Socotra Governorate">Socotra Governorate</option>
                        <option value="Ta'izz Governorate">Ta'izz Governorate</option>
                    </>
                )
            case "Zambia":
                return (
                    <>
                        <option value="Central Province">Central Province</option>
                        <option value="Copperbelt Province">Copperbelt Province</option>
                        <option value="Eastern Province">Eastern Province</option>
                        <option value="Luapula Province">Luapula Province</option>
                        <option value="Lusaka Province">Lusaka Province</option>
                        <option value="Muchinga Province">Muchinga Province</option>
                        <option value="Northern Province">Northern Province</option>
                        <option value="Northwestern Province">Northwestern Province</option>
                        <option value="Southern Province">Southern Province</option>
                        <option value="Western Province">Western Province</option>
                    </>
                )
            case "Zimbabwe":
                return (
                    <>
                        <option value="Bulawayo Province">Bulawayo Province</option>
                        <option value="Harare Province">Harare Province</option>
                        <option value="Manicaland">Manicaland</option>
                        <option value="Mashonaland Central Province">Mashonaland Central Province</option>
                        <option value="Mashonaland East Province">Mashonaland East Province</option>
                        <option value="Mashonaland West Province">Mashonaland West Province</option>
                        <option value="Masvingo Province">Masvingo Province</option>
                        <option value="Matabeleland North Province">Matabeleland North Province</option>
                        <option value="Matabeleland South Province">Matabeleland South Province</option>
                        <option value="Midlands Province">Midlands Province</option>
                    </>
                )
            default:
                return (
                    <>
                    </>
                )
        }
    }

    return (
        <>
            {setCities()}
        </>
    )
}

export { Cities }