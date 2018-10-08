

export function setWithdrawal(amount) {
    return {
        type: 'WITHDRAWAL',
        payload: {
            amount
        }
    }
}