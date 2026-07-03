import React from 'react'

function Contact(props) {
  return (
    <div>
        <address>Address:{props.adInfo.address}</address>
        <p>Contact:{props.adInfo.contact}</p>
        <p>Email:{props.adInfo.email}</p>
    </div>
  )
}
function Footer() {
  return (
    <div>
        <p>Footer</p>
    </div>
  )
}

export {Contact,Footer}