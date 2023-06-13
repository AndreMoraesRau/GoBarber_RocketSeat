import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

interface ITemplateVariables {
  [key: string]: string | number | undefined;
}

export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
