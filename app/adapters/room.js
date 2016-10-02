import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  // Headers.
  // user token would be computed on a session object in real life
  // Transaction would be setted in a another single callback
  // But right now Im just touching the adapter for the buy action, soo...
  headers: {
    'Gtw-Sec-User-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVkZW50aWFsIjp7InBlcnNvbklkIjo3NjI3ODY1LCJ1c2VySWQiOjk2NzExLCJuYW1lIjoiVElNRSIsImNwZiI6IjQxMDUyOTY0ODUwIiwiYnJhbmNoSWQiOjEwMDAsImFnZW50U2lnbiI6IlciLCJ1c2VyIjoiTVRaQ1BENjAwIn0sInN5c3RlbXMiOlt7InN5c3RlbUNvZGUiOjEsImNsaWVudElEIjo3MTEyOTk0NDY3Mzg4NTkwLCJleHBpcmVzT24iOiIyMDE2LTA3LTA2VDIwOjU4OjQ4LjAwMC0wMzowMCIsImFjdGl2ZSI6IlMgIn0seyJzeXN0ZW1Db2RlIjozLCJjbGllbnRJRCI6NzExMjk5NDQ2NzM4ODU5MSwiZXhwaXJlc09uIjoiMjAxNi0wNy0wNlQyMDoxMzo0OC4wMDAtMDM6MDAiLCJhY3RpdmUiOiJTICJ9XSwiaWF0IjoxNDY3ODQ1OTI2fQ.UJ-ijCm_fjTgSwoTQ4JgVn4hyQrQYWQfFIWzJZUwCT0',
    'Gtw-Transaction-Id': '1234567890',
  },

  urlForFindRecord(id, model, snap) {
    let url = this._super(id, model, snap);

    // Assuming current location has parent
    // If this weren't case we would to locale parent first to build url
    let currentUrl = window.location.pathname;
    let hotelId = currentUrl.split("/")[2];

    // Naive way of recreating url
    return url.replace(`/${this.get('namespace')}/rooms/`, `/${this.get('namespace')}/hotels/${hotelId}/rooms/`);
  }
});
