let requst = new XMLHttpRequest;
requst.open ('GET', 'url')
requst.onload = () =>{
    let status = (requst.status)
    let result = JSON.parse(requst.response)
    console.log(result);
}
requst.error = ()=> {
    console.log(error);
}
requst.send();