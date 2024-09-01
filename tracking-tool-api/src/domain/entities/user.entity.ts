import BaseEntity from "./base.entity";

export class UserEntity extends BaseEntity {
    public id: string;
    public name: string;
    public email: string;
    public password: string;
    public role: string;
    public status: string;
    public createdAt: Date;
    public updatedAt: Date;
    
    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: string,
        status: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}