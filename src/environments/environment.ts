// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:7070/axis/',

  login: 'user/login',
  upload: 'user/upload', // .NET service
  register: 'user/create',
  validateSingleInfo: 'user/validate',

  projectList: 'timesheet/user/timesheet',
  submitTimesheet: 'timesheet/submitTimesheetForm',

  loggerDebug: 'log/debug',
  loggerWarn: 'log/warning',
  loggerError: 'log/error'

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
