export class API {
  constructor() {

  }

  // post(endpoint, params, callback) {
  //   let url = endpoint + '?' + Object.keys(params).map((k) => k + '=' + encodeURIComponent(params[k])).join('&');
  //   $.ajax({
  //     method: 'POST',
  //     url: url,
  //     success: (response) => {
  //       callback(JSON.parse(response));
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

  // // LOGIN METHODS:

  // isLoggedIn() {
  //   return !!localStorage.userId;
  // }

  // logOut() {
  //   delete localStorage.userId;
  // }

  // logIn(email, password, callback) {
  //   this.post('/login', {email: email, password: password}, (result) => {
  //     if (result.status === 'success') {
  //       localStorage.userId = result.id;
  //     }
  //     callback(result);
  //   });
  // }

  // signUp(email, password, callback) {
  //   this.post('/signup', {email: email, password: password}, (result) => {
  //     if (result.status === 'success') {
  //       localStorage.userId = result.id;
  //     }
  //     callback(result);
  //   });
  // }

  // // ACCOUNT PREFS:

  // /*
  // Prefs is a dictionary! (for both)

  // {
  //   class_year: 2018,
  //   concentration: 'CSCI',
  //   favorite_class: 'CSCI 0320',
  //   dept_interests: ['CSCI', 'VISA', 'CHIN']
  // }

  // */

  // // callback has 1 param, a prefs dictionary
  // getPrefs(callback) {
  //   this.post('/getUserPrefs', {id: localStorage.userId}, (result) => {
  //     if (result.status === 'success') {
  //       callback(result.preferences);
  //     }
  //   });
  // }

  // checkIfPreferencesNeedEntry(callback) {
  //   this.getPrefs((prefs) => {
  //     callback(!prefs.class_year);
  //   });
  // }

  // postPrefs(prefs) {
  //   prefs.id = localStorage.userId;
  //   this.post('/setUserPrefs', prefs, (result) => {

  //   });
  // }

  // // callback has 1 param, a calendar json
  // getCalendar(callback) {
  //   this.post('/getCart', {id: localStorage.userId}, (result) => {
  //     if (result.status === 'success') {
  //       callback(result);
  //     }
  //   });
  // }

  // // ADD COURSES UI apis

  // /*
  // `filters` are a dict of restrictions on the results.
  // {

  // }
  // */

  // getRecommendations(filters, callback) {
  //   // /recommend?id=verySecureId123|open=true|false&less_than_10_hours=true|false&small_courses=true|false
  //   let boolString = (bool) => bool ? 'true' : 'false';
  //   let hoursString = (hours) => hours ? hours : '999';
  //   let courseString = (size) => size ? size : 'any';
  //   let params = {
  //     id: localStorage.userId,
  //     open: boolString(filters.open),
  //     hours: hoursString(filters.hours),
  //     course_size: courseString(filters.course_size),
  //     cap: courseString(filters.cap)
  //   }
  //   this.post('/recommend', params, callback);
  // }

  // search(filters, query, callback) {
  //   this.post('/search', {query: query}, callback);
  // }

  // // Gets course info
  // // callback has 1 param, the course object
  // courseInfo(courseCode, callback) {
  //   this.post('/course', {courseId: courseCode}, callback);
  // }

  // // adds one of the two sections to the backend calendar
  // addToCart(sectionCode, callback) {
  //   this.post('/addSection', {id: localStorage.userId, section: sectionCode}, callback)
  // }

  // removeFromCart(sectionCode, callback) {
  //   this.post('/removeSection', {id: localStorage.userId, section: sectionCode}, callback)
  // }

  // // gets all the departments.
  // getDepartments(callback) {
  //   $.get("/departments", responseJSON => {
  //     const responseObject = JSON.parse(responseJSON);
  //     callback(responseObject);
  //   });
  // }

  // getSharedCart(id, callback) {
  //   this.post('/getSharedCart', {id: id}, callback);
  // }

  // getSharedCartUrl(callback) {
  //   this.post('/getShareId', {id: localStorage.userId}, (response) => {
  //     let id = response.share_id;
  //     let url = 'http://' + location.host + '/user/' + id;
  //     callback(url);
  //   })
  // }

  getIpForValidation(callback) {

    // let response = await fetch('http://jsonip.com/?callback=?');
    // let responseJson = await response.json();
    // console.log("hiiii")
    //     console.log(responseJson)
    return fetch('http://jsonip.com/?callback=?')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("hiiii")
        console.log(response)
       // callback(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // addEmoji(id, emojiIcon) {
  //   $.post('/addEmoji', {courseId: id, emoji: emojiIcon});
  // }

  // addWord(id, word) {
  //   $.post('/addWord', {courseId: id, word: word});
  // }

  // addAltName(id, altName) {
  //   $.post('/addAltName', {courseId: id, altName: altName});
  // }


  // getTimeslots(callback) {
  //   $.get("/timeslots", responseJSON => {
  //     const responseObject = JSON.parse(responseJSON);
  //     callback(responseObject);
  //   });
  // }
}
