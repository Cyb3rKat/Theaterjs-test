import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("models/environment.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={8.76}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Soil_Soil_texture_0.geometry}
                        material={materials.Soil_texture}
                    />
                    <group position={[6.15, 4.42, -27]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Water_Water_texture_0.geometry}
                            material={materials.Water_texture}
                        />
                    </group>
                    <group position={[-14.07, 11.95, -25.51]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Rock_Rock_texture_0.geometry}
                            material={materials.Rock_texture}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Tree_2_Tree_2_texture_0.geometry}
                        material={materials.Tree_2_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Tree_1_Tree_1_texture_0.geometry}
                        material={materials.Tree_1_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Wood_Wood_texture_0.geometry}
                        material={materials.Wood_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Coppice_Coppice_texture_0.geometry}
                        material={materials.Coppice_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Grass_Grass_texture_0.geometry}
                        material={materials.Grass_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Root_Root_texture_0.geometry}
                        material={materials.Root_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lotus_leaf_Lotus_leaf_texture_0.geometry}
                        material={materials.Lotus_leaf_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lantern_pole_Lantern_pole_texture_0.geometry}
                        material={materials.Lantern_pole_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Kerbstone_Kerbstone_texture_0.geometry}
                        material={materials.Kerbstone_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Wooden_poles_Wooden_pole_texture_0.geometry}
                        material={materials.Wooden_pole_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Box_Box_texture_0.geometry}
                        material={materials.Box_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Wood_floor_1_Wood_floor_1_texture_0.geometry}
                        material={materials.Wood_floor_1_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Wood_floor_2_Wood_floor_2_texture_0.geometry}
                        material={materials.Wood_floor_2_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Wood_floor_3_Wood_floor_3_texture_0.geometry}
                        material={materials.Wood_floor_3_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Wood_floor_4_Wood_floor_4_texture_0.geometry}
                        material={materials.Wood_floor_4_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Other_Other_texture_0.geometry}
                        material={materials.Other_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Boat_Boat_texture_0.geometry}
                        material={materials.Boat_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Rickshaw_Rickshaw_texture_0.geometry}
                        material={materials.Rickshaw_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            nodes.Wooden_railings_1_Wooden_railings_1_texture_0.geometry
                        }
                        material={materials.Wooden_railings_1_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Window_1_Window_1_texture_0.geometry}
                        material={materials.Window_1_texture}
                    />
                    <group position={[-3.11, 14.27, -6.57]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.B_House_1_B_house_1_texture_0.geometry}
                            material={materials.B_house_1_texture}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Window_2_Window_2_texture_0.geometry}
                        material={materials.Window_2_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.B_House_2_B_house_2_texture_0.geometry}
                        material={materials.B_house_2_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            nodes.Wooden_railings_3_Wooden_railings_3_texture_0.geometry
                        }
                        material={materials.Wooden_railings_3_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Window_3_Window_3_texture_0.geometry}
                        material={materials.Window_3_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Other_3_Other_3_texture_0.geometry}
                        material={materials.Other_3_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.B_House_3_B_house_3_texture_0.geometry}
                        material={materials.B_house_3_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={
                            nodes.Wooden_railings_4_Wooden_railings_4_texture_0.geometry
                        }
                        material={materials.Wooden_railings_4_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Other_4_Other_4_texture_0.geometry}
                        material={materials.Other_4_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Window_4_Window_4_texture_0.geometry}
                        material={materials.Window_4_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.B_House_4_B_House_4_texture_0.geometry}
                        material={materials.B_House_4_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Window_5_Window_5_texture_0.geometry}
                        material={materials.Window_5_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Other_5_Other_5_texture_0.geometry}
                        material={materials.Other_5_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Rotating_bowl_Rotating_bowl_texture_0.geometry}
                        material={materials.Rotating_bowl_texture}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.B_House_5_B_House_5_texture_0.geometry}
                        material={materials.B_House_5_texture}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("models/environment.glb");


