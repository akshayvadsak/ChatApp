import React, { FC, useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';
import { HttpsActionNames, HttpsHandler } from '../../../client/system/HttpsHandler';

interface DataRow {
    Label: string;
    Count: number;
}

const columns: TableColumn<DataRow>[] = [
    {
        name: 'Label',
        selector: row => row.Label,
        sortable:true
    },
    {
        name: 'Count',
        selector: row => row.Count,
        sortable:true

    },
];


const SignupCount: FC = () => {
    const [rowData, setRowData] = useState<DataRow[]>([]);

    useEffect(() => {
        let url = `${HttpsHandler.BASE_URL}/${HttpsActionNames.GET_SIGN_UP_COUNT}`;
        let rows: DataRow[] = [];
        HttpsHandler.SendGetRequest(url, true, (success, data, message) => {
            if (success)
            {
                let row: DataRow = {
                    Label: "Total Sign Ups",
                    Count: data,
                }
                rows.push(row);
                setRowData(rows);
            }
        }, (success, message) => {

        });
    }, []);

    return <DataTable columns={columns} data={rowData} />;
}

export default SignupCount