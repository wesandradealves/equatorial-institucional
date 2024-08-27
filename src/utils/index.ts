import { HttpService } from "@/services";

const http = new HttpService();

export const camelCase = (str: any) => {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

export const fetchData = async($url: any) => {
  const response:any = await http.get($url);
  return response;
}  

export const fetchVideos = async (channelId: any, videoDuration?: any) => {
  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet&maxResults=10&type=video&order=date${videoDuration ? `&videoDuration=${videoDuration}` : ''}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', JSON.stringify(error, null, 2));
    return [];
  }
}; 

export const fetchStatistics = async (data: any) => {
  let results: any = await Promise.all(data.map(async (item: any): Promise<any> => {
    let id = item?.id?.videoId;
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);
    const statistics = await response.json();   

    if(item?.snippet && statistics?.items) {
      return {
        id: id,
        ...item?.snippet,
        ...statistics?.items[0]?.statistics
      }
    }

    return null;
  }));   

  return results;
}    