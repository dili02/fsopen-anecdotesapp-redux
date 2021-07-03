
import React from 'react'
import { connect } from 'react-redux'

const Notification = ({ notification }) => {
  //const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <>
      {
        notification &&
          <div style={style}>
            {notification}
          </div>
      }
    </>
  )
}

//export default Notification

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification);
export default ConnectedNotification;