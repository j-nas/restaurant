const contactTab = (() => {
  const content = `<div id="contactContent">
  <div class="hero-img" id="resos">
    <div class="hero-text">
      <h2>RESERVATIONS</h2><p>and TAKEOUT</p>
    </div>
  </div>


  <div id="blurb">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, hic, velit odio commodi veritatis adipisci et id magni natus ab neque eaque. Quasi voluptatibus labore odio, deleniti ratione iste deserunt. lore</p>
  </div>
  <div id="contactMap">
    <p> 13763 Hawthorne Blvd <br> Hawthorne, CA</p>
    <form action="">
      
          <label for="name">Name</label>
          <input type="text" id="name" name="user_name" size="26"><br>
          <label for="mail">Email</label>
          <input type="email" id="mail" name="user_email" size="26"><br>
          <label for="phone">Phone Number</label>
          <input type="phone" id="number" name="user_number" size="10"><br>
          <div>How would you like us to contact you?</div>
          <input type="radio" name="preference" id="phone">
          <label for="phone">Phone</label>
          <input type="radio" name="preference" id="email">
          <label for="email">Email</label><br>          
          <label for="message">Your message:</label>
          <textarea name="user_message" id="message" rows="2" cols="23">Your message
          </textarea>
        
        <input type="submit">
    </form>
    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.332913586475!2d-118.35502278478882!3d33.90683038064574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b431e55944f7%3A0x9a6ca5f1dcf11b2!2s13763%20Hawthorne%20Blvd%2C%20Hawthorne%2C%20CA%2090250%2C%20USA!5e0!3m2!1sen!2sca!4v1617004219158!5m2!1sen!2sca" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>

</div>`;

  const div = document.createElement("div");
  const body = document.getElementById("content");
  const oldContent = document.querySelector(".tabContent");
  div.classList.add("tabContent");
  div.innerHTML = content;

  const render = () => {
    oldContent.remove();
    body.appendChild(div);
    // console.log(content)
  };
  return {
    render,
  };
})();

export default contactTab;
