import * as userService from './user.service';
import * as serviceCategoryService from './serviceCategory.service';
import * as serviceService from './service.service';
import * as reservationService from './reservation.service';
import * as customerService from './customer.service';
import * as salesService from './sales.service';

export { default as loginPassport} from './loginPassport';
export { default as tokenPassport} from './tokenPassport';
export { issueToken } from './token.service';

export { userService, serviceCategoryService, serviceService, reservationService, customerService, salesService };