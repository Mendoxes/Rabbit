import sanityClient from "@sanity/client"


export default sanityClient({

projectId: "b3z50f05",   //from sanity package jason
dataset: "production",
apiVersion: '2021-03-25', // use a UTC date string
// token: 'sanity-auth-token', // or leave blank for unauthenticated usage
useCdn: true, // `false` if you want to ensure fresh data


})