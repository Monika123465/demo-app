import React from 'react'
import {Avatar, Box,Card, CardContent, Grid} from "@mui/material"

const list=[
    {
        url:"https://images.unsplash.com/photo-1682687221323-6ce2dbc803ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title:"The Mountain",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro, illo reiciendis eveniet, fugit voluptatibus voluptas veritatis consequatur totam aperiam eos ducimus. Totam voluptatem aperiam, ipsum eveniet velit quidem quas"

    },
    {
      url:"https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title:"The Mountain",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro, illo reiciendis eveniet, fugit voluptatibus voluptas veritatis consequatur totam aperiam eos ducimus. Totam voluptatem aperiam, ipsum eveniet velit quidem quas"

  },
  {
    url:"https://images.unsplash.com/photo-1682686580950-960d1d513532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title:"The Mountain",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro, illo reiciendis eveniet, fugit voluptatibus voluptas veritatis consequatur totam aperiam eos ducimus. Totam voluptatem aperiam, ipsum eveniet velit quidem quas"

},
{
  url:"https://images.unsplash.com/photo-1682343159992-249e6ac38f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  title:"The Mountain",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro, illo reiciendis eveniet, fugit voluptatibus voluptas veritatis consequatur totam aperiam eos ducimus. Totam voluptatem aperiam, ipsum eveniet velit quidem quas"

},
{
  url:"https://images.unsplash.com/photo-1682547095016-c9cfee414163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  title:"The Mountain",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil porro, illo reiciendis eveniet, fugit voluptatibus voluptas veritatis consequatur totam aperiam eos ducimus. Totam voluptatem aperiam, ipsum eveniet velit quidem quas"

}

]

const Catalog = () => {
  return (
    <Box>
{list.map(el=>(<Card ><CardContent>{el.title}</CardContent>  <img src={el.url}/> <p>{el.description}</p></Card>

))}
    </Box>
  )
}

export default Catalog

