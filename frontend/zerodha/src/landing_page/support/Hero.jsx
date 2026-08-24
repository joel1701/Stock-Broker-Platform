import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
	return (
		<section className="py-5 border-bottom">
			<div className="row align-items-center g-4">
				<div className="col-lg-8">
					<h1 className="fs-2 mb-3">Support Portal</h1>
					<p className="text-muted mb-0">
						Find answers, create tickets, and get quick help for account and platform queries.
					</p>
				</div>
				<div className="col-lg-4 text-lg-end">
					<Link className="btn btn-primary" to="/signup">
						Open an Account
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
