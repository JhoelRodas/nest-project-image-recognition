create table planes
(
    id int PRIMARY KEY,
    name text not NULL,
    description text not null,
    limit_members int not NULL,
    price FLOAT not NULL
)
create table organizations
(
    id int PRIMARY KEY,
    name text not null,
    creation_date date,
    creation_time time,
    plan_id int
        FOREIGN key (plan_id) REFERENCES planes(id)

);

create table users
(
    id int PRIMARY KEY,
    email text not null UNIQUE,
    auth_provider TEXT CHECK (auth_provider IN ('email', 'google', 'github')) DEFAULT 'email',
    password text,
    creation_date date,
    creation_time time,
);

create table organization_members
(
    id int PRIMARY KEY,
    role text NOT NULL,
    organization_id INT,
    user_id INT,
    FOREIGN KEY (organization_id) REFERENCES organizations(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

create table patients
(
    id int PRIMARY KEY,
    name text not NULL,
    a_paternal text,
    a_maternal text,
    sexo text not NULL,
    birth_date date NOT NULL,
    phone int not NULL,
    email text,
    creation_date date,
    creation_time time,
    organization_id INT,
    FOREIGN KEY (organization_id) REFERENCES organizations(id),
);

create table medical_appointments
(
    id int PRIMARY KEY,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    patient_id INT
        FOREIGN KEY (patient_id) REFERENCES patients(id),
    organization_id INT,
    FOREIGN KEY (organization_id) REFERENCES organizations(id),
);

create table diagnoses
(
    id int PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL,
    creation_date date,
    creation_time time,
    organization_id INT,
    FOREIGN KEY (organization_id) REFERENCES organizations(id),
)

create TABLE treatments
(
    id int PRIMARY KEY,
    description text NOT NULL,
    duration text not NULL,
    instructions text NOT NULL,
    organization_id INT,
    FOREIGN KEY (organization_id) REFERENCES organizations(id),
)

create table consultations
(
    id int PRIMARY KEY,
    consultation_date date NOT NULL,
    motivo text NOT NULL,
    observaciones text NOT NULL,
    creation_date date,
    creation_time time,
    organization_id INT,
    patient_id INT,
    user_id INT,
    FOREIGN KEY (organization_id) REFERENCES organizations(id),
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
)

create table consultation_diagnoses
(
    consultation_id INT,
    diagnosis_id INT,
    PRIMARY KEY (consultation_id, diagnosis_id),
    FOREIGN KEY (consultation_id) REFERENCES consultations(id),
    FOREIGN KEY (diagnosis_id) REFERENCES diagnoses(id)
);

create table consultation_treatments
(
    consultation_id INT,
    treatment_id INT,
    PRIMARY KEY (consultation_id, treatment_id),
    FOREIGN KEY (consultation_id) REFERENCES consultations(id),
    FOREIGN KEY (treatment_id) REFERENCES treatments(id)
);





