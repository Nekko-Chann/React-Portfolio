import { Col, Row } from "react-bootstrap"
import ProjectCard from "./project.card";
import {PROJECTS_BACKEND, PROJECTS_FRONTEND} from "helpers/data";
import { useTranslation } from "react-i18next";

const Project = () => {
    const { t } = useTranslation();
    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">{t("project.title")}{" "}<span>{t("project.brand")}</span> </h3>
                    <h6 className="text-center mb-md-5 mb-2">{t("project.heading6")}</h6>
                </Col>
            </Row>
            <Row style={{fontSize: "25px", justifyContent: "center"}}>Project Frontend</Row>
            <Row
                style={{justifyContent: "center", paddingBottom: "10px"}}
            >
                {PROJECTS_FRONTEND?.map(item => {
                    return (
                        <Col md={3} className="project-card" key={item.id}>
                            <ProjectCard
                                imgPath={item.imgPath}
                                title={item.title}
                                description={item.description}
                                frontend={item.frontend}
                                backend={item.backend}
                            />
                        </Col>
                    )
                })}
            </Row>

            <Row style={{fontSize: "25px", justifyContent: "center", marginTop:"25px"}}>Project Backend</Row>
            <Row
                style={{justifyContent: "center", paddingBottom: "10px"}}
            >
                {PROJECTS_BACKEND?.map(item => {
                    return (
                        <Col md={3} className="project-card" key={item.id}>
                            <ProjectCard
                                imgPath={item.imgPath}
                                title={item.title}
                                description={item.description}
                                frontend={item.frontend}
                                backend={item.backend}
                            />
                        </Col>
                    )
                })}
            </Row>
            <div className="mb-7"></div>
        </>
    )
}

export default Project;