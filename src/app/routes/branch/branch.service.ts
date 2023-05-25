export interface Data_List_Type{
    id: string,
    branchName: string,
    branchCode: string,
    branchPhone: string
}

const DATA_LIST: Data_List_Type[] = [
    {
        id: '01',
        branchName: 'LMT',
        branchCode: '0001',
        branchPhone: '093322333'
    },
    {
        id: '02',
        branchName: 'BYN',
        branchCode: '0002',
        branchPhone: '083263223'
    },
    {
        id: '03',
        branchName: 'PZD',
        branchCode: '0003',
        branchPhone: '083373849'
    },
    {
        id: '04',
        branchName: 'AHL',
        branchCode: '0004',
        branchPhone: '124522563'
    },
    {
        id: '05',
        branchName: 'AHL',
        branchCode: '0004',
        branchPhone: '124522563'
    },
    {
        id: '06',
        branchName: 'TGK',
        branchCode: '0004',
        branchPhone: '124522563'
    },
    {
        id: '07',
        branchName: 'TGI',
        branchCode: '0004',
        branchPhone: '124522563'
    },
    {
        id: '08',
        branchName: 'MDY',
        branchCode: '0004',
        branchPhone: '124522563'
    },
    {
        id: '09',
        branchName: 'MGY',
        branchCode: '0004',
        branchPhone: '124522563'
    },
    {
        id: '10',
        branchName: 'TTY',
        branchCode: '0004',
        branchPhone: '124522563'
    },
    {
        id: '11',
        branchName: 'SGI',
        branchCode: '0004',
        branchPhone: '124522563'
    },
]

export class BranchService {
    getAllBranch(){
        return DATA_LIST;
    }
}
    
