


export class PortalService {
    accountList = [
        {
            balance: '2000 MMK',
            product : 'Flexi Everyday',
            accountNo : '001100011240440',
            id: '1'
        },
        {
            balance: '10000 MMK',
            product : 'Smart',
            accountNo : '001100011240421',
            id: '2'

        },
        {
            balance: '30000 MMK',
            product : 'Flexi Call Deposit',
            accountNo : '001100011240435',
            id: '3'
        },
    ]

    getAccountList(){
        return this.accountList;
    }
}