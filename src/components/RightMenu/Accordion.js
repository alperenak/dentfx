import React, { Component } from "react";

/*** Styles ***/
import styles from "./rightMenu.scss";

/*** Icons ***/
import sendIcon from "../../icons/send.svg";
import checkpointIcon from "../../icons/Shape.svg";
import checkpointIcon_negative from "../../icons/Shape_2.svg";
import dentalImplantIcon from "../../icons/dental-implant.svg";
import dropdownIcon from "../../icons/dropdown-disabled.svg";
import dentHospitalIcon from "../../icons/dent-hospital-icon.svg";
import dentalAnalysisIcon from "../../icons/dental-analysis-icon.svg";

class Accordion extends Component {
  state = { classname_open: "" };

  onClickExpand = () => {
    this.setState({
      classname_open: this.state.classname_open === "" ? "open" : "",
    });
  };

  render() {
    let { record } = this.props;
    let { classname_open } = this.state;

    return (
		<div className={`${"rightBar__treatmentHistory__accordionContainer"} ${classname_open}`}>
			<div className="rightBar__treatmentHistory__accordionContainer__header">
				<div className="rightBar__treatmentHistory__accordionContainer__icon">
					<img src={dentalImplantIcon} alt="" />
				</div>

				<div className="rightBar__treatmentHistory__accordionContainer__content">
					<div className="rightBar__treatmentHistory__accordionContainer__content__title">{record?.title}</div>
					<div className="rightBar__treatmentHistory__accordionContainer__content__extras">
						<div className="date">{record?.date}</div>
						<div className="price">{record?.price}</div>
					</div>
				</div>
				<div className={`${"rightBar__treatmentHistory__accordionContainer__toggler"} ${classname_open}`} onClick={this.onClickExpand}>
					<img src={dropdownIcon} alt="" />
				</div>
			</div>

			<div className={`${"rightBar__treatmentHistory__accordionContainer__details"} ${classname_open}`}>
				<div className={"rightBar__treatmentHistory__accordionContainer__details__clinicDetails"}>
					<img src={dentHospitalIcon} alt="" />
					<div className={"rightBar__treatmentHistory__accordionContainer__details__clinicDetails__metadata"}>
						<div className={"clinic"}>{record.Clinic.name}</div>
						<div
						className={"dentist"}
						>{`${record.Dentist.name} ${record.Dentist.surname}`}</div>
						</div>
					</div>

					<div className={"rightBar__treatmentHistory__accordionContainer__details__header"}>
						<img src={dentalAnalysisIcon} alt="" />
						<div className={"headertitle"}>Dental Analysis</div>
					</div>

					<div className={"rightBar__treatmentHistory__accordionContainer__details_image"}>
						<img src={record.analysis} alt="" />
					</div>

					<div className={"rightBar__treatmentHistory__accordionContainer__title"}>Description</div>

					<div className={"rightBar__treatmentHistory__accordionContainer__description"}>{record.description}</div>

					{record.checkList.map((checkpoint, i) => {
						return (
							<div className={"rightBar__treatmentHistory__accordionContainer__checkpoint"} key={i}>
								<div>
									{checkpoint.isCheck && <img src={checkpointIcon} alt="" />}
									{!checkpoint.isCheck && (
										<img src={checkpointIcon_negative} alt="" />
									)}
								</div>
								<div>{checkpoint.text}</div>
							</div>
						);
					})}
					<button>
						<img src={sendIcon} alt="" />
						Send Message to Doctor
					</button>
				</div>
		</div>
    );
  }
}

export default Accordion;
