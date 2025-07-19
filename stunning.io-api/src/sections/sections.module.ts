import { Module } from "@nestjs/common";
import { SectionsController } from "./sections.controller";
import { SectionsService } from "./sections.service";
import { SectionSchema } from "./section.model";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Section', schema: SectionSchema }]),
    ],
    controllers: [SectionsController],
    providers: [SectionsService],
})
export class SectionsModule {}