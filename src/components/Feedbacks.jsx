import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import Tilt from "react-tilt";

import { github } from "../assets";

const FeedbackCard = ({
	index,
	project,
	testimonial,
	name,
	designation,
	company,
	image,
	source_code_link,
	tags,
}) => (
	<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
		<Tilt
			options={{
				max: 45,
				scale: 1,
				speed: 450,
			}}
			className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
			<div className='relative w-full h-[230px]'>
				<img
					src={image}
					alt='project_image'
					className='w-full h-full object-cover rounded-2xl'
				/>

				{/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
					<div
						onClick={() => window.open(source_code_link, "_blank")}
						className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
						<img
							src={github}
							alt='source code'
							className='w-1/2 h-1/2 object-contain'
						/>
					</div>
				</div> */}
			</div>

			<div className='mt-5'>
				<h3 className='text-white font-bold text-[24px]'>{project}</h3>
				<p className='mt-2 text-secondary text-[14px]'>{testimonial}</p>
			</div>

			<div className='mt-4 flex flex-wrap gap-2'>
				{tags.map((tag) => (
					<p
						key={`${name}-${tag.name}`}
						className={`text-[14px] ${tag.color}`}>
						#{tag.name}
					</p>
				))}
			</div>
		</Tilt>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={`${styles.sectionHeadText}`}>Physical Prototyping.</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
					Following projects showcases my skills as a Maker, Problem Solver,
					Builder. It reflects my ability to break and solve complex problems,
					work with different technologies, collaborate with multi-domain teams
					and successfully build a product from Ideation to Prototype using
					Digital Fabrication technologies like- 3D printing, Laser cutting,
					Power Tools, IOT.
				</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7'>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard
						key={`project-${index}`}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Feedbacks, "");
