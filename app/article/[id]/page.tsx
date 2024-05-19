export default function Article({ params }: { params: { id: number } }){
  return(
    <div>
      <h1>article/{params.id}</h1>
    </div>
  )
}