using { s1.db as s1 }  from '../db/schema';

service MyService @(requires: 'authenticated-user'){    
    entity SE1 as projection on s1.SE1;
}