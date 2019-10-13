# General questions

## 1. 

Currently I'm obssesed with a book called "the age of surveillance capitalis" - SHOSHANA ZUBOFF. it really gives a great insight about the threat that we face in the digital age.

## 2.

Recently I got the change to build with other devs during EHTBERLINZWEI a DeFi project callet Cherry Swap, it is a interest rate swap on top of compound protocl and I'm very proud of what we achieved in 32hours.

## 3.

An API that works as a bridge between Humhub platform(web2) and the Ethereum blockchain https://github.com/Coinsence/coinsence-monorepo/tree/master/lib/http

## 4.

I think the best way to make software maintainable is by commenting codes, writing clear automated unit tests and specially writing understandable documentation. 

## 5.

{
    "description": {
        "name": "Haythem Sellami",
        "short-bio": "A free-man and a software developer by design",
        "github": "https://github.com/haythem96",
        "linkedin": "https://www.linkedin.com/in/haythem96/",
        "twitter": "https://twitter.com/HS10010110"
    }
}

### Questions on the code test

## 1.

I think looping through a list of requestId is not a good solution, I think it can be better replaced by passing a list of requestid and use synchronous execution, also calling the requestCoreService and that may call some nodes may make it slower... graphql also can help indexing those events I think.

## 2.

I spent the most time with reading the javascript library documentation just to get a better idea of Request Network in general.

## 3.

I find the test overall okay, I didn't expect similar test for a blockchain engineering role, because basically there was no smart contracts coding in the test.

### Bonus: Ethereum smart contract design

- I assume that the smart contract that will be called have always enough funds to send back to the msg.sender the gas fee.
- potential attacks are a malicious address that can drain all the contract funds

* How it work:
- get call data of the function in the frontend through web3
- the function should call a refund function passing the sender address

Currently we can replace this mechanism with meta transactions so that the contracts itself pay for the function fee call.