import React from 'react'

const VideoList = (props) => {
    return (
        <div>
             I have {props.videos.length} videos.
        </div>
    )
}

export default VideoList

// import React, { Component } from 'react'

// export class VideoList extends Component {
//     render() {
//         return (
//             <div>
//                  I have {this.props.videos.length} videos.
//             </div>
//         )
//     }
// }

// export default VideoList

