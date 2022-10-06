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


const UserCountByGenerationStatus: FC = () => {
    const [rowData, setRowData] = useState<DataRow[]>([]);

    useEffect(() => {
        let rows: DataRow[] = [];
        let url = `${HttpsHandler.BASE_URL}/${HttpsActionNames.GET_COUNT_BY_STATUS}`;
        HttpsHandler.SendGetRequest(url, true, (success, data, message) => {
            if (success) {
                let stdRow: DataRow = {
                    Label: "Standard Users",
                    Count: data.standardCount,
                }

                let autoGenRow: DataRow = {
                    Label: "Auto Generated Users",
                    Count: data.autoGenCount
                }
                rows.push(stdRow);
                rows.push(autoGenRow);
                setRowData(rows);
            }
        }, (success, message) => {

        });
    }, []);

    return <DataTable columns={columns} data={rowData} />;
}

export default UserCountByGenerationStatus