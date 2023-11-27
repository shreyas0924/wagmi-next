import Link from 'next/link'
import { Account } from '../components/contractComponents/Account'
import { Balance } from '../components/contractComponents/Balance'
import { Connect } from '../components/contractComponents/Connect'
import { Connected } from '../components/contractComponents/Connected'
import { NetworkSwitcher } from '../components/contractComponents/NetworkSwitcher'
import { ReadContract } from '../components/contractComponents/ReadContract'
import { ReadContracts } from '../components/contractComponents/ReadContracts'
import { ReadContractsInfinite } from '../components/contractComponents/ReadContractsInfinite'
import { SendTransaction } from '../components/contractComponents/SendTransaction'
import { SendTransactionPrepared } from '../components/contractComponents/SendTransactionPrepared'
import { SignMessage } from '../components/contractComponents/SignMessage'
import { SignTypedData } from '../components/contractComponents/SignTypedData'
import { Token } from '../components/contractComponents/Token'
import { WatchContractEvents } from '../components/contractComponents/WatchContractEvents'
import { WatchPendingTransactions } from '../components/contractComponents/WatchPendingTransactions'
import { WriteContract } from '../components/contractComponents/WriteContract'
import { WriteContractPrepared } from '../components/contractComponents/WriteContractPrepared'
import { Button } from '../components/ui/button'

export default function Page() {
  return (
    <div className='container mx-auto my-8 p-8 bg-gray-400 flex flex-col'>
      <h1 className='text-3xl font-bold text-center mb-8'>
        wagmi + next.js + shadcn/ui
      </h1>
      <div className='flex flex-row items-center'>
        <Connect />

        <Link href={`/account`}>
          <Button>Go to account</Button>
        </Link>
      </div>
    </div>
  )
}
