import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import image1 from "../../../assets/img/examples/studio-2.jpg";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
import Card from "components/Card/Card";
import { Typography, Button } from "@material-ui/core";
import "./SectionPills.scss";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title} align="center">
            <h3>المنهج التدريبي مع غسان كلاسك</h3>
          </div>
          <div className={classes.title} align="center">
            <h3>
              <small>
                هل تريد الحصول على عضلات صلبه وجسم رائع في اقصر فتره ممكنه ؟
              </small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <Card>
                <img src={image1} alt="First slide" />
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <Typography
                className={classes.TypographySection}
                variant="h5"
                gutterBottom
                align="right"
              >
                : ما الذي نقدمه لك من خلال المنهج التدريبي
              </Typography>
              <ul dir="rtl">
                <li className={classes.listItems}>
                  <Typography align="right" variant="body1" gutterBottom>
                    اشتراك نصف سنوي لمده ٢٤ اسبوع تتضمن منهاج التمارين و النظام
                    الغذائي و ايام الوجبات المفتوحه و الكثير من التفاصيل.
                  </Typography>
                </li>
                <li className={classes.listItems}>
                  <Typography align="right" variant="body1" gutterBottom>
                    منهاج التمرين مصمم لاستهداف جميع العضلات في الجسم وفق احدث
                    طرق التدريب اتي ابتكرها خبراء كمال الاجسام موزعه على ٧ ايام
                    في الاسبوع حيث يكون ٥ ايام تمرين و يومين استراحه.
                  </Typography>
                </li>
                <li className={classes.listItems}>
                  <Typography align="right" variant="body1" gutterBottom>
                    المكملات الغذائيه و حوارق الدهون و طرق استخدامها بشكل امن و
                    الكثير من التفاصيل التي تحتاجها للوصل الى مستوى رائع و
                    المحافظه علئ صحتك.
                  </Typography>
                </li>
                <li className={classes.listItems}>
                  <Typography align="right" variant="body1" gutterBottom>
                    التنضيف بعد المنهج PCT للمحافضه على النتائج المكتسبه و اعطاء
                    راحه للجسم.
                  </Typography>
                </li>
                <li className={classes.listItems}>
                  <Typography align="right" variant="body1" gutterBottom>
                    النظام الغذائي يحسب بشكل اوتوماتيكي خصيصا لك حيث من خلال
                    ادخال معلومات بسيطه نحسب السعرات الحراريه التي تحتاجها.
                  </Typography>
                </li>
                <li className={classes.listItems}>
                  <Typography align="right" variant="body1" gutterBottom>
                    ايضا يتضمن الكاريدوا بمختلف انواعه للحصول على نتائج افضل و
                    المحافضه على صحه القلب و حرق اكبر كميه من الدهون.
                  </Typography>
                </li>
              </ul>

              <Typography
                className={classes.TypographySection}
                align="center"
                variant="h6"
                gutterBottom
              >
                اشتري البرنامج التدريبي الان بسعر
                <div className="priceStyle">
                  <del>
                    <span>$49,99</span>
                  </del>
                  <br></br>
                  <ins>
                    <span>$29,99</span>
                  </ins>
                </div>
              </Typography>
              <div className={classes.PurchasingButtonWraper}>
                <Button
                  className={classes.PurchasingButton}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  اشتري الان{" "}
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
