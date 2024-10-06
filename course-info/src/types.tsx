export interface CoursePartBase {
    name: string;
    exerciseCount: number;
    description?: string;
    requirements?: string[]; 
  }
  
export interface CoursePartBasic extends CoursePartBase {
    description: string;
    kind: "basic"
  }
  
export interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
  }
  
export interface CoursePartBackground extends CoursePartBase {
    description: string;
    backgroundMaterial: string;
    kind: "background"
}

export interface CoursePartSpecial extends CoursePartBase {
    description: string;
    requirements: string[];
    kind: "special"
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;

export interface ContentProps {
    courseParts: CoursePart[];
}

export interface PartProps {
    part: CoursePart;
}