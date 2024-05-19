export default function Article({ params }: { params: { id: number } }){
  return(
    <>
      <h1>article/{params.id}</h1>
    </>
  )
}