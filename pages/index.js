import React from 'react'

const Index = ({ domain }) => {
  return(
    <div>
      <h1>Domain: {domain}</h1>
    </div>
  )
}
export default Index

export async function getServerSideProps ({ res, req }) {
  // if(req.query && req.query.ligacache){
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
  // }
  return {
    props:{
      domain: req.headers.host
    }
  }
}
