import axios from 'axios';

const KEY = 'AIzaSyCTJhS3lkjlM7FmxP_84dnI4o2FOKSo8MY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
