import Card from './Card';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import Imagen from './Imagen';
import Membership from './Membership';
import Powerzone from './Powerzone';

const Home = () => {
	return (
		<>
			<Navbar title="Home" />,
			<Imagen  Imagen= "https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YTAyMWRkZmZjODE5MWJkMzAyZjJlNjgwNzY0ZDU6ZmlsZV8wMDAwMDAwMDY4Yzg2MWY2YjEwODBlNDA2MGRkZTFlNyIsInRzIjoiNDg2MzEzIiwicCI6InB5aSIsInNpZyI6ImY1NTJmMjE0ZjcyYTk0MDM5OWM1ZDk0NmU0MWFmNjUyZTZmZWE1NGQ4ODY5ODAzMmQ4NzhhODlmYjY5YmZlOTYiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" />,
			<Membership title= "Membership"/>
			<Jumbotron title="¡Es hora de darlo todo!" />,
			<Powerzone title="PowerZone"/>
			<div className="row">
				<div className='col-3'>
					<Card
						title={"PEOPLE WHO CARE"}
						imgUrl={"https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YjI1MjYwNWQ4ODE5MTgxNTAzNDc0NThmMmJmMTg6ZmlsZV8wMDAwMDAwMDk5Yzg2MWY5YTk4NDNiODdhNjM1YjAyZiIsInRzIjoiNDg2MzM0IiwicCI6InB5aSIsInNpZyI6IjVmMGM2YTA4NjU1NDE5Y2FmZmI4NjNkYTRlZjUzNzM0ODU3NWVkOWE5MzE1N2QyN2E3YTExOGExZDg3ZGRiZjYiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="}
						description={"At PowerZone, you’re more than just a member — you’re part of a community. We’re people who care about your goals, your progress, and your well-being. From our friendly staff to our passionate trainers, we’re here to support you every step of the way. Real people. Real support. Real results."} />
				</div>

				<div className='col-3'>
					<Card
						title="NO JUDGMENTS"
						imgUrl={"https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YTEzZmJkMjMwODE5MTkzNGZmZWZkYTFhM2FmNzA6ZmlsZV8wMDAwMDAwMDA1YWM2MWY4OWIxMzcxZTViMWNkOTIxNiIsInRzIjoiNDg2MzE0IiwicCI6InB5aSIsInNpZyI6ImM5ZmQxNDc4YTlhZTIwZTM4YzU5MTNiOWMwYTFjODkzYmQwMjIwNGJlYTcyYTU5YzNlNWM4MTRiZmI2Y2Y2MTIiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="}
						description={"Everyone starts somewhere — and here, you're always welcome. At PowerZone, we believe in progress, not perfection. This is a no judgments zone where all bodies, all goals, and all levels are respected. Come as you are, grow at your pace.Confidence starts with acceptance."} />
				</div>

				<div className='col-3'>
					<Card
						title={"CARDIO MILES"}
						imgUrl={"https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YTE1MjRiMDc4ODE5MTk5OTZmOTE0NzAyMGFiNmQ6ZmlsZV8wMDAwMDAwMGVhZjQ2MWY4ODFhOTc5Y2NjYTEyMTIxMiIsInRzIjoiNDg2MzE1IiwicCI6InB5aSIsInNpZyI6IjMwM2FjZDY4MGFlYTQzMzVlNjYyNGNiNjgwYzE0ZDQzMmYyZDJhNjQ1YTY4MTUzYTEwYmU5NjVmMmY2MDFjZTEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="}
						description={"Every step, every stride, every heartbeat gets you closer to your goals. At PowerZone, our cardio area is designed to help you go the distance—whether you're walking, running, cycling, or climbing. Rack up your cardio miles and feel the progress with every session. How far will you go today?"}
					/>
				</div>
				<div className='col-1'>
					<Card
						title={"AWESOME CLASSES"}
						imgUrl={"https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YTE2YjQxY2E0ODE5MTkxZTFjNTg4NGVjMDRkMjc6ZmlsZV8wMDAwMDAwMDRiY2M2MWZkYjYxMmMyZmVkNTkxMWY1NiIsInRzIjoiNDg2MzE1IiwicCI6InB5aSIsInNpZyI6IjdmNWU3YjVlZjE4ZTlkNDUyYWJjMTdkMjRjMWM5ZDRiOTJjYmZmMThhYTA4OGYwM2YzMTIwYWYwYTg5NTk0YjEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="}
						description={"Experience workouts that go beyond the ordinary. At PowerZone, our amazing classes are designed to motivate, challenge, and energize you—no matter your fitness level. From high-intensity sessions to relaxing and balance-focused classes, each one is led by passionate instructors who guide you every step of the way. Feel the energy, push your limits, and train with the best vibe in a group setting."}
					/>
				</div>
			</div>
			<Footer title="CopyRight" />
		</>
		
	);
	
};
export default Home;
