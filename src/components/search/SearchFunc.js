import { findDomain4Search } from "@/web3-lib/apis/view-api.js"
import { mobInfuraWeb3 } from '@/web3-lib/infura/index'

/**
 * queryBalance
 * @param {*} account
 */
export async function queryBalance(account) {
	var web3 = mobInfuraWeb3(3)
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