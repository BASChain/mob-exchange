import { findDomain4Search } from "@/web3-lib/apis/view-api.js"

/**
 * queryBalance
 * @param {*} account
 */
export async function queryBalance(account) {
	return await web3.eth.getBalance(account.toString())
}

export function queryDomain(text, chainId) {
	const res = findDomain4Search(text.toString(), chainId)
	return res
}

export default {
	queryBalance,
	queryDomain
}