import { useMutation, useQueryClient } from "react-query"
import postDeleteItem from "./postDeleteItem"
import './deleteItem.css'

function DeleteItem({title} : {title: string} ) {
  const queryClient = useQueryClient()

  const mutation = useMutation(postDeleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"])
    }
  })


  return (
    <button className="deleteButton" onClick={() => {
      mutation.mutate(title)
    }}> Supprimer </button>
  )
}

export default DeleteItem
