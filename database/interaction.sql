create database if not exists interaction;

  use interaction;

  create table if not exists emails(
    codeEmail int not null primary key,
    email varchar (50)
  )engine=InnoDB;
  create table if not exists stars(
    codeStar int not null auto_increment primary key,
    nameStar varchar (25),
    descriptionStar varchar (100)
  )engine=InnoDB;
  create table if not exists records(
    codeRecord int not null auto_increment primary key,
    message varchar (200),
    codeEmail1 int not null,
    codeStar1 int not null,
    constraint fk_emails_stars
    foreign key (codeEmail1)
    references emails(codeEmail),
    foreign key (codeStar1)
    references stars(codeStar)
  )engine=InnoDB;
