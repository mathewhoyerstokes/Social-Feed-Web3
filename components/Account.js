import EthName from './EthName'
// pass the account data inside the function

const Account = function ({ accounts, isLoggedIn, connect }) {
  if (isLoggedIn) {
    return (
       <EthName address={accounts[0]}/>
    )
  } else {
    return (
        <button onClick={connect}>Connect</button>
    )
  }
}

export default Account;