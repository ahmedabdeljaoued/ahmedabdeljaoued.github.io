#!/usr/bin/env python3
from pathlib import Path

from fpdf import FPDF

OUT = Path(__file__).resolve().parents[1] / "documents" / "CV_Ahmed_Abdeljaoued.pdf"


class CV(FPDF):
    def header(self):
        pass

    def footer(self):
        self.set_y(-15)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 10, f"Page {self.page_no()}", align="C")

    def section(self, title: str):
        self.ln(4)
        self.set_font("Helvetica", "B", 12)
        self.set_text_color(30, 30, 30)
        self.cell(0, 8, title, new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(50, 50, 50)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(3)

    def body(self, text: str):
        self.set_font("Helvetica", "", 10)
        self.set_text_color(40, 40, 40)
        self.multi_cell(0, 5, text)

    def job(self, title: str, company: str, dates: str):
        self.set_font("Helvetica", "B", 10)
        self.set_text_color(30, 30, 30)
        self.cell(0, 6, title, new_x="LMARGIN", new_y="NEXT")
        self.set_font("Helvetica", "I", 9)
        self.set_text_color(80, 80, 80)
        self.cell(0, 5, f"{company}  |  {dates}", new_x="LMARGIN", new_y="NEXT")
        self.ln(1)


def main():
    pdf = CV(format="A4")
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_page()
    pdf.set_margins(18, 16, 18)

    pdf.set_font("Helvetica", "B", 18)
    pdf.cell(0, 9, "Ahmed Abdeljaoued", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(60, 60, 60)
    pdf.cell(0, 6, "Senior Data Engineer  |  Technical Lead", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 9)
    pdf.cell(
        0,
        5,
        "Berlin, Germany  |  abdeljaoued.ahmed@gmail.com  |  ahmedabdeljaoued.github.io",
        new_x="LMARGIN",
        new_y="NEXT",
    )

    pdf.section("About")
    pdf.body(
        "Senior Data Engineer and Technical Lead at Alexander Thamm GmbH, specializing in "
        "Azure-based data platforms, Databricks, PySpark, and modern analytics solutions. "
        "Designs and maintains scalable data platforms, production-grade ETL/ELT pipelines, "
        "business intelligence solutions, and cloud-native applications. Leads development "
        "teams, consults clients, translates requirements into technical designs, and drives "
        "technical decision-making."
    )

    pdf.section("Core Skills")
    pdf.body(
        "Data Engineering: Azure Databricks, PySpark, Python, SQL, Delta Lake, ETL/ELT, "
        "Data Warehousing, Data Modeling, Data Pipelines, Performance Optimization\n"
        "Microsoft Azure: Azure Data Factory, Azure Storage, Azure SQL, Unity Catalog, Databricks Jobs\n"
        "Business Intelligence: Power BI, Power BI Administration, RLS, RBAC, Dashboard Development\n"
        "Software Development: Next.js, NestJS, TypeScript, REST APIs, Webhooks, Full Stack\n"
        "Leadership: Technical Leadership, Client Consulting, Solution Design, Requirements "
        "Engineering, Estimation, Agile, Stakeholder Management, Team Leadership"
    )

    pdf.section("Professional Experience")

    pdf.job("Senior Data Engineer / Technical Lead", "Alexander Thamm GmbH", "2022 - Present")
    pdf.body(
        "Designs and delivers enterprise data platforms and analytics solutions for customers "
        "in Germany.\n\n"
        "German Wholesale Company - Senior Data Engineer\n"
        "Maintained and enhanced Azure Data Warehouse and BI platform; ETL/ELT with Databricks "
        "and PySpark; Delta Lake; Azure Data Factory; Power BI dashboards.\n\n"
        "German Automotive Manufacturer (R&D) - Technical Lead & Senior Data Engineer\n"
        "Technical leadership of a business-critical web app and data platform; Next.js, NestJS, "
        "SQL, REST/Webhooks; large-scale sync with Databricks/PySpark.\n\n"
        "German Automotive Manufacturer (Planning) - Technical Lead & Senior Data Engineer\n"
        "BI platform direction; Python wheel packages; Databricks Jobs; Unity Catalog; Power BI "
        "admin with RBAC and RLS; team leadership and stakeholder consulting."
    )

    pdf.job("Data Engineer", "tausendkind GmbH", "June 2020 - 2022")
    pdf.body(
        "Developed data marts and reporting for business departments. Optimized PostgreSQL ETL, "
        "Linux shell automation, Qlik KPIs, and database backup/restore procedures."
    )

    pdf.job("IT Consultant", "SD&C GmbH", "March 2019 - May 2020")
    pdf.body(
        "Microsoft Azure, SQL Server, PowerShell, Power BI, SharePoint/TypeScript. Improved client "
        "data warehouse architecture, automated ingestion, and built SSIS ETL packages."
    )

    pdf.job("Working Student - BI Developer and Consultant", "SD&C GmbH", "January 2018 - February 2019")
    pdf.body(
        "Data warehouse solutions, SQL Server ETL/modeling, Power BI and R visualization."
    )

    pdf.job("Freelancer - Data Engineer", "DATANOMIQ", "March 2017 - May 2017")
    pdf.body(
        "Spark ML rating prognosis on a 20-million-rating dataset; environment configuration."
    )

    pdf.section("Education")
    pdf.body(
        "Master Media Computer Science - HTW Berlin (October 2016 - February 2019)\n"
        "Master Applied Computer Science - HTW Berlin (October 2014 - September 2016)\n"
        "B.A. Computer Network Administration - Institut Superieur de l'Informatique, Tunis "
        "(September 2010 - July 2013)"
    )

    pdf.section("Interests")
    pdf.body(
        "Data Engineering, Cloud Architecture, Analytics Engineering, Azure Ecosystem, "
        "AI-powered Data Platforms, Software Architecture, Full Stack Development"
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(OUT)
    dup = OUT.parent / "CV.pdf"
    dup.write_bytes(OUT.read_bytes())
    print(f"Wrote {OUT}")
    print(f"Wrote {dup}")


if __name__ == "__main__":
    main()
