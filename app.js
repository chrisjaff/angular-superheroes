let superData = [
{name: 'Batman', phonenumber: 3019119889, affiliation:"DC", img_url:"http://cartoonbros.com/batman/batman-2/"}
//{name: 'Superman', phonenumber: 3019119881, affiliation:"DC", img_url:"http://www.logospike.com/wp-content/uploads/2014/11/Superman_logo-2.png"}
//{name: 'Spiderman', phonenumber: 3019119888, affiliation:"Marvel", img_url:"http://www.printablee.com/postpic/2009/07/spider-man-logo-circle_144773.jpg"}

]


angular.module("superApp", [])
  .controller("supersCtrl", [ superController ])

function superController () {
  this.supers = superData
}
angular.module("superApp")
