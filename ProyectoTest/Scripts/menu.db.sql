-- menu."permission" definition

-- Drop table

-- DROP TABLE menu."permission";

CREATE TABLE menu."permission" (
	permission_id uuid NOT NULL,
	"name" varchar NOT NULL,
	value varchar NULL,
	CONSTRAINT permission_pk PRIMARY KEY (permission_id),
	CONSTRAINT permission_unique UNIQUE (name)
);


-- menu.state definition

-- Drop table

-- DROP TABLE menu.state;

CREATE TABLE menu.state (
	"table" varchar NULL,
	"name" varchar NULL,
	value varchar NULL,
	state_id uuid NOT NULL,
	CONSTRAINT state_unique UNIQUE (state_id)
);


-- menu.config definition

-- Drop table

-- DROP TABLE menu.config;

CREATE TABLE menu.config (
	"name" varchar NOT NULL,
	value varchar NULL,
	CONSTRAINT config_pk PRIMARY KEY (name)
);


-- menu."user" definition

-- Drop table

-- DROP TABLE menu."user";

CREATE TABLE menu."user" (
	user_id uuid NOT NULL,
	username varchar NOT NULL,
	"password" varchar NULL,
	mail varchar NOT NULL,
	first_name varchar NULL,
	last_name varchar NULL,
	state_id uuid NULL,
	CONSTRAINT user_pk PRIMARY KEY (user_id),
	CONSTRAINT user_unique UNIQUE (username),
	CONSTRAINT user_unique_1 UNIQUE (mail)
);


-- menu.rol definition

-- Drop table

-- DROP TABLE menu.rol;

CREATE TABLE menu.rol (
	rol_id uuid NOT NULL,
	"name" varchar NOT NULL,
	description varchar NULL,
	state_id uuid NULL,
	CONSTRAINT rol_pk PRIMARY KEY (rol_id),
	CONSTRAINT rol_unique UNIQUE (name)
);


-- menu.page definition

-- Drop table

-- DROP TABLE menu.page;

CREATE TABLE menu.page (
	page_id uuid NOT NULL,
	"name" varchar NOT NULL,
	url varchar NOT NULL,
	state_id uuid NULL,
	CONSTRAINT page_pk PRIMARY KEY (page_id),
	CONSTRAINT page_unique UNIQUE (name),
	CONSTRAINT page_unique_1 UNIQUE (url)
);


-- menu.user_rol definition

-- Drop table

-- DROP TABLE menu.user_rol;

CREATE TABLE menu.user_rol (
	user_id uuid NOT NULL,
	rol_id uuid NULL
);


-- menu.personal_access definition

-- Drop table

-- DROP TABLE menu.personal_access;

CREATE TABLE menu.personal_access (
	user_id uuid NULL,
	page_id uuid NULL,
	permission_id uuid NULL
);


-- menu.menu definition

-- Drop table

-- DROP TABLE menu.menu;

CREATE TABLE menu.menu (
	menu_id uuid NOT NULL,
	"name" varchar NULL,
	parent_menu_id uuid NULL,
	page_id uuid NULL,
	state_id uuid NULL,
	CONSTRAINT menu_pk PRIMARY KEY (menu_id)
);


-- menu.menu_permission definition

-- Drop table

-- DROP TABLE menu.menu_permission;

CREATE TABLE menu.menu_permission (
	menu_id uuid NULL,
	rol_id uuid NULL,
	user_id uuid NULL
);


-- menu.function_page definition

-- Drop table

-- DROP TABLE menu.function_page;

CREATE TABLE menu.function_page (
	page_id uuid NULL,
	rol_id uuid NULL,
	user_id uuid NULL,
	"name" varchar NULL,
	value varchar NULL
);


-- menu."user" foreign keys

ALTER TABLE menu."user" ADD CONSTRAINT user_state_fk FOREIGN KEY (state_id) REFERENCES menu.state(state_id);


-- menu.rol foreign keys

ALTER TABLE menu.rol ADD CONSTRAINT rol_state_fk FOREIGN KEY (state_id) REFERENCES menu.state(state_id);


-- menu.page foreign keys

ALTER TABLE menu.page ADD CONSTRAINT page_state_fk FOREIGN KEY (state_id) REFERENCES menu.state(state_id);


-- menu.user_rol foreign keys

ALTER TABLE menu.user_rol ADD CONSTRAINT user_rol_rol_fk FOREIGN KEY (rol_id) REFERENCES menu.rol(rol_id);
ALTER TABLE menu.user_rol ADD CONSTRAINT user_rol_user_fk FOREIGN KEY (user_id) REFERENCES menu."user"(user_id);


-- menu.personal_access foreign keys

ALTER TABLE menu.personal_access ADD CONSTRAINT personal_access_page_fk FOREIGN KEY (page_id) REFERENCES menu.page(page_id);
ALTER TABLE menu.personal_access ADD CONSTRAINT personal_access_permission_fk FOREIGN KEY (permission_id) REFERENCES menu."permission"(permission_id);
ALTER TABLE menu.personal_access ADD CONSTRAINT personal_access_user_fk FOREIGN KEY (user_id) REFERENCES menu."user"(user_id);


-- menu.menu foreign keys

ALTER TABLE menu.menu ADD CONSTRAINT menu_menu_fk FOREIGN KEY (parent_menu_id) REFERENCES menu.menu(menu_id);
ALTER TABLE menu.menu ADD CONSTRAINT menu_page_fk FOREIGN KEY (page_id) REFERENCES menu.page(page_id);
ALTER TABLE menu.menu ADD CONSTRAINT menu_state_fk FOREIGN KEY (state_id) REFERENCES menu.state(state_id);


-- menu.menu_permission foreign keys

ALTER TABLE menu.menu_permission ADD CONSTRAINT menu_permission_menu_fk FOREIGN KEY (menu_id) REFERENCES menu.menu(menu_id);
ALTER TABLE menu.menu_permission ADD CONSTRAINT menu_permission_rol_fk FOREIGN KEY (rol_id) REFERENCES menu.rol(rol_id);
ALTER TABLE menu.menu_permission ADD CONSTRAINT menu_permission_user_fk FOREIGN KEY (user_id) REFERENCES menu."user"(user_id);


-- menu.function_page foreign keys

ALTER TABLE menu.function_page ADD CONSTRAINT function_page_page_fk FOREIGN KEY (page_id) REFERENCES menu.page(page_id);
ALTER TABLE menu.function_page ADD CONSTRAINT function_page_rol_fk FOREIGN KEY (rol_id) REFERENCES menu.rol(rol_id);
ALTER TABLE menu.function_page ADD CONSTRAINT function_page_user_fk FOREIGN KEY (user_id) REFERENCES menu."user"(user_id);