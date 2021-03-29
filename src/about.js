const aboutTab = (() => {
  const content = "<div class='hero-img'><div class='hero-text'><h2>This Is Some Serious Gourmet</h2></div></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic assumenda, asperiores voluptatum laboriosam adipisci ad nobis accusantium fugiat pariatur consequuntur eligendi. Molestias quisquam ut inventore recusandae quia, voluptas id ratione? <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque tenetur nemo eos aliquid, dolores laboriosam! Sed nesciunt eius, eligendi, maxime quia iure aliquam ipsum nulla nobis excepturi dolorem ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, rem, praesentium vel odio incidunt numquam, quam asperiores iusto voluptatem dolore possimus dignissimos veniam nostrum consequuntur quos quo voluptates sit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque accusantium recusandae a exercitationem corrupti laborum sapiente id saepe quam! Voluptatum quisquam, minus maiores sunt accusantium eos corporis illum vel? <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem sit modi, adipisci quae tempora reprehenderit earum aut nesciunt omnis nulla deserunt error facere animi, inventore ex, corporis officiis. Qui? <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur cum commodi iste, adipisci optio eveniet, libero repellendus possimus assumenda minus eDivnim vero nisi atque de.</p>"
  const div = document.createElement("div")
  const body = document.getElementById("content")
  div.classList.add("tabContent")
  div.innerHTML = content
  
  const render = () => {
    body.appendChild(div)
    
  }
return {
  render
}
})()

export default aboutTab