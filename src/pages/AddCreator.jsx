import React from 'react'

const AddCreator = () => {
  return (
    <>
      <div className="creator-form">
        <form>
          <div className="form-group1">
            <label htmlFor="creatorName">Creator Name:</label>
            <input type="text" id="creatorName" />
            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" />
            <label htmlFor="description">Description:</label>
            <textarea id="description"></textarea>
          </div>
          <div className="form-group2">
            <h3>Social Media Links:</h3>
            <label htmlFor="Twitch">Twitch:</label>
            <input type="text" id="Twitch" />
            <label htmlFor="YouTube">YouTube:</label>
            <input type="text" id="YouTube" />
            <label htmlFor="Instagram">Instagram:</label>
            <input type="text" id="Instagram" />
          </div>
        </form>
      </div>
    </>
  )
}

export default AddCreator