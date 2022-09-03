# DevmentorPro

Devmentor pro is a subscription service that provides a way for supports of Mark Tellez's efforts to spread free modern web development material.

- Subscriptions (stripe)
- NextAuth (github)
- NextJS (ssr, secure sensitive info)
- Database (Mongo)

## REACT/NEXT APP

user -> does something -> generates some state (useState)
that state is the state of the react component ui

-> backend -> database -> collection -> documents

REACT APP UI <- STATE -> SERVER DB

{
name: "universe",
galaxies: []
}

App({
name: "universe",
galaxies: []
})

-> db (react state)-> database -> react (state)

user -> update record -> immediate insert/update the record in the UI, and THEN send it to the server to write to the db
