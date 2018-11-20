export interface AxisResponse {
    status: string;
    exception: string;
}

export interface AxisLoginResponse extends AxisResponse {
    data: User;
}

export interface Employee {
    employeeID: number;
    title: string;
    companyName: string;
    date: Date;
    workPhone: string;
    mobilePhone: string;
}

export interface User {
    id: number;
    username: string;
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    password: string;
    gender: string;
    role: string;
    city: string;
    province: string;
    postalcode: string;
    employee: Employee;
    enabled: boolean;
    authorities: any;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;

}

