import { motion } from 'framer-motion';
type Props = {
	children: JSX.Element;
};
export const Motion = ({ children }: Props) => {
	return <motion.div>{children}</motion.div>;
};
