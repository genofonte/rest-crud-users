import { Injectable } from "@nestjs/common";
import { UserDTO } from "./users.dto";
import { UserEntity } from "./users.entity";

@Injectable()
export class UserMapper {

    dtoToEntity(userDTO: UserDTO): UserEntity {
        return new UserEntity(userDTO.id, userDTO.name);
    }

    entityToDto(userEntity: UserEntity): UserDTO {
        return new UserDTO(userEntity.userId, userEntity.name);
    }

}