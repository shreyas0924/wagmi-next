import React from 'react'
import { Connected } from '../../components/contractComponents/Connected'
import { Account } from '../../components/contractComponents/Account'
import { Balance } from '../../components/contractComponents/Balance'

const page = () => {
  return (
    <div>
      <Connected>
        {/* <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Network</h2>
        <NetworkSwitcher />
        <br /> */}
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Account</h2>
        <Account />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Balance</h2>
        <Balance />
        <br />
        {/* <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Block Number</h2>
        <BlockNumber />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Read Contract</h2>
        <ReadContract />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Read Contracts</h2>
        <ReadContracts />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Read Contracts Infinite</h2>
        <ReadContractsInfinite />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Send Transaction</h2>
        <SendTransaction />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Send Transaction (Prepared)</h2>
        <SendTransactionPrepared />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Sign Message</h2>
        <SignMessage />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Sign Typed Data</h2>
        <SignTypedData />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Token</h2>
        <Token />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Watch Contract Events</h2>
        <WatchContractEvents />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Watch Pending Transactions</h2>
        <WatchPendingTransactions />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Write Contract</h2>
        <WriteContract />
        <br />
        <hr className='my-4' />
        <h2 className='text-2xl font-bold mb-4'>Write Contract (Prepared)</h2>
        <WriteContractPrepared /> */}
      </Connected>
    </div>
  )
}

export default page
