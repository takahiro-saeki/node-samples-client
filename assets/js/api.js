export default function api(url, data, success) {
  let jqXHR = $.ajax({
    url : url,
    type : 'GET',
    data: data,
    success: success,
    datatype: 'json'
  });
  return jqXHR.promise();
}
