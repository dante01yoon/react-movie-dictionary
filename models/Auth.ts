export type AuthBody = {
	id: string;
	password: string;
}

type Operation = 'list' | 'get' | 'create' | 'update' | 'delete';
type OperationPermission = Partial<Record<Operation, boolean>>; 
type Menu = 'users' | 'projects' | 'products' | 'project_types' | 'orders' | 'deliveries';
export type MenuPermission = Partial<Record<Menu, OperationPermission>>;

export type AuthResponse = {
	token: string;
	permissions: MenuPermission;
	username: string;
}
